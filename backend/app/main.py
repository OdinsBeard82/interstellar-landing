from fastapi import FastAPI
from app.routes.movies import router as movies_router

app = FastAPI(title="Interstellar Backend API")

app.include_router(movies_router)

@app.get("/")
def root():
    return {"message": "Interstellar API is running"}