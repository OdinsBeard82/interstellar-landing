from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.movies import router as movies_router

app = FastAPI(title="Interstellar Backend API")

# ⚡ Add all development and production frontend URLs
origins = [
    "http://localhost:5173",                       # Vite dev
    "http://localhost:3000",                       # CRA dev (optional)
    "https://sci-fi-movie-landing-page.netlify.app", # Netlify frontend
    "https://your-vercel-project.vercel.app",      # Vercel frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # whitelist
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include your movies router
app.include_router(movies_router)

@app.get("/")
def root():
    return {"message": "Interstellar API is running"}