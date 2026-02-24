from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.movies import router as movies_router

app = FastAPI(title="Interstellar Backend API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   
    allow_credentials=False,  
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(movies_router)

@app.get("/")
def root():
    return {"message": "Interstellar API is running"}