from fastapi import APIRouter
import requests
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="/movies", tags=["Movies"])

TMDB_API_KEY = os.getenv("TMDB_API_KEY")

@router.get("/scifi")
def get_scifi_movies():
    url = (
        f"https://api.themoviedb.org/3/discover/movie"
        f"?api_key={TMDB_API_KEY}"
        f"&with_genres=878"  # 878 is Sci-Fi genre
        f"&sort_by=popularity.desc"
    )

    response = requests.get(url)

    if response.status_code != 200:
        return {"error": "Failed to fetch data from TMDb"}

    data = response.json()

    simplified = [
        {
            "id": movie["id"],
            "title": movie["title"],
            "poster_path": movie["poster_path"],
            "release_date": movie["release_date"],
            "overview": movie.get("overview", "")
        }
        for movie in data.get("results", [])
    ]

    return simplified

@router.get("/trending")
def get_trending_movies():
    # Reuse the same Sci-Fi data for `/trending`
    return get_scifi_movies()