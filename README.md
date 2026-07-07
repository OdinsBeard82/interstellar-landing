![Project Screenshot](./assets/screenshot.png)

# Full Stack Movie Discovery App

## 🔗 Live Demo

- **Frontend (Vercel):** https://interstellar-landing-git-master-odinsbeard82s-projects.vercel.app/
- **Backend API (Render):** https://interstellar-landing.onrender.com

---

## Overview

This is a full-stack movie discovery application built using **React (Vite)** and **FastAPI**, powered by **The Movie Database (TMDB)** API.

The project originally began as a frontend-only landing page before being refactored into a full-stack application. The goal was to learn how to build a client-server architecture, securely integrate third-party APIs, and deploy frontend and backend services independently.

### Key Features

- Securely stores the TMDB API key on the backend
- Prevents direct client access to the TMDB API
- Routes all API requests through a FastAPI backend
- Separates frontend and backend deployments for a production-style architecture

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Python
- FastAPI
- Uvicorn

### External API

- The Movie Database (TMDB)

### Deployment

- Vercel (Frontend)
- Render (Backend)

### Tools

- Git
- GitHub

---

## Architecture

```text
Browser
    │
    ▼
React (Vite) Frontend
    │
HTTP Requests
    │
    ▼
FastAPI Backend
    │
TMDB API
    │
    ▼
Movie Data
```

The frontend never communicates directly with TMDB. Instead, requests are routed through the FastAPI backend, where the API key is securely stored using environment variables. This protects sensitive credentials while providing a clean API layer between the client and TMDB.

---

## Features

- Browse trending and popular movies
- View detailed movie information
- Watch movie trailers
- Responsive user interface
- Secure backend proxy for TMDB API requests
- Environment variable configuration

---

## API Endpoints

### `GET /api/movies/popular`

Returns a list of popular movies.

### `GET /api/movies/{movie_id}`

Returns detailed information for a specific movie.

---

## Running Locally

### Clone the repository

```bash
git clone https://github.com/OdinsBeard82/Fullstack-Movie-Discovery-App.git
cd Fullstack-Movie-Discovery-App
```

### Configure environment variables

Create a `.env` file inside the `backend/` directory:

```env
TMDB_API_KEY=your_tmdb_api_key
```

### Start the backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Start the frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Deployment

The application is deployed as two independent services:

- **Frontend:** Hosted on Vercel
- **Backend:** Hosted on Render

Environment variables are configured on the backend so the TMDB API key is never exposed to the client.

---

## What I Learned

This project helped me gain experience with:

- Building a full-stack application using React and FastAPI
- Designing RESTful APIs
- Integrating third-party APIs
- Protecting API keys using a backend proxy
- Managing environment variables
- Configuring CORS between frontend and backend
- Deploying frontend and backend services independently
- Debugging communication between distributed services

---

## Future Improvements

- Add user authentication
- Store favourite movies in a database
- Add advanced search and filtering
- Implement automated testing
- Generate API documentation with OpenAPI/Swagger
- Add CI/CD using GitHub Actions
- Containerise the application with Docker
