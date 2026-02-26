![Project Screenshot](./assets/screenshot.png)

# 🪐 Sci-Fi Movie Landing Page
## 🔗 Live Demo

- **Production (Vercel)**: [Live Demo](https://interstellar-landing-git-master-odinsbeard82s-projects.vercel.app/)
- **Backend API (Render)**: [API Endpoint](https://interstellar-landing.onrender.com)

# Interstellar Landing

This is a fullstack movie discovery app built on top of the TMDB API.

Originally this started as a frontend-only landing page, but I refactored it to include a backend so that:

- API keys are never exposed in the browser
- The frontend only talks to my own server
- Calls to TMDB are proxied through safe endpoints
- The app can be deployed fully without VS Code running

## What It Is

There are two parts:

- **Backend** — Node + Express that talks to TMDB
- **Frontend** — static site that fetches from my backend

The backend handles all communication with TMDB and keeps the TMDB API key secure via environment variables.

## Architecture


Browser
→ calls
My Backend API (Express)
→ calls
TMDB API
→ returns
Data to frontend


The client does not access TMDB directly.

## API Endpoints

The backend exposes a small set of REST endpoints:

### `GET /api/movies/popular`

Returns a list of popular movies.

### `GET /api/movies/:id`

Returns detailed data for a specific movie ID.

## How to Run Locally

1. Clone the repo
2. Create a `.env` file in the `backend/` folder
3. Add your TMDB API key to `.env`:


TMDB_API_KEY=your_key_here


4. Install and start:


cd backend
npm install
npm start


This will start the backend server with your API key loaded.

You can then open the frontend locally as static files or with a simple HTTP server.

## Deployment

The backend is deployed as a web service with environment variables configured.

The frontend is deployed as a static site that only makes requests to the deployed backend.

Both parts run without VS Code open.

## What I’d Improve Next

- Add user authentication (JWT)
- Add a database for user favorites
- Add automated tests for backend routes
- Add API documentation (Swagger or Postman)
- Add CI/CD pipelines

## About Me

I’m a developer working towards fullstack and backend roles. I build and dep
