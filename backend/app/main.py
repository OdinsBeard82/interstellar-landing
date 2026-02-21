from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.movies import router as movies_router

app = FastAPI(title="Interstellar Backend API")

# CORS configuration — allow frontend URLs
origins = [
    "http://localhost:3000",                        # Local frontend
    "https://sci-fi-movie-landing-page.netlify.app",  # Netlify frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://sci-fi-movie-landing-page.netlify.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the movies router
app.include_router(movies_router)

@app.get("/")
def root():
    return {"message": "Interstellar API is running"}