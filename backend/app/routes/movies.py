from fastapi import APIRouter
import requests
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="/movies", tags=["Movies"])

TMDB_API_KEY = os.getenv("TMDB_API_KEY")

@router.get("/trending")
def get_trending_movies():
    url = f"https://api.themoviedb.org/3/trending/movie/week?api_key={TMDB_API_KEY}"
    response = requests.get(url)

    if response.status_code != 200:
        return {"error": "Failed to fetch data from TMDb"}

    data = response.json()

    # Cleaned response for frontend
    simplified = [
        {
            "id": movie["id"],
            "title": movie["title"],
            "poster_path": movie["poster_path"],
            "release_date": movie["release_date"]
        }
        for movie in data.get("results", [])
    ]

    return simplified