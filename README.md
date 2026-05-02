![Project Screenshot](./assets/screenshot.png)

# Fullstack Movie Discovery App

## 🔗 Live Demo
- **Production (Vercel)**: [Live Demo](https://interstellar-landing-git-master-odinsbeard82s-projects.vercel.app/)
- **Backend API (Render)**: [API Endpoint](https://interstellar-landing.onrender.com)

This is a fullstack movie discovery app built on top of the TMDB API. Originally this started as a frontend-only landing page, but I refactored it to include a backend so that:

- API keys are never exposed in the browser
- The frontend only talks to my own server
- Calls to TMDB are proxied through safe endpoints
- The app can be deployed fully without VS Code running

## Tech Stack
- Node.js / Express — backend API
- Vanilla JS / HTML / CSS — frontend
- Vercel — frontend deployment
- Render — backend deployment
- TMDB API — movie data

## Architecture
Browser → My Backend API (Express) → TMDB API → Data returned to frontend
The client does not access TMDB directly.

## API Endpoints

### `GET /api/movies/popular`
Returns a list of popular movies.

### `GET /api/movies/:id`
Returns detailed data for a specific movie ID.

## How to Run Locally

1. Clone the repo
2. Create a `.env` file in the `backend/` folder:
```env
TMDB_API_KEY=your_key_here
```
3. Install and start:
```bash
cd backend
npm install
npm start
```

## Deployment
The backend is deployed as a web service with environment variables configured.
The frontend is deployed as a static site that only makes requests to the deployed backend.
Both parts run without VS Code open.

## What I'd Improve Next
- Add user authentication (JWT)
- Add a database for user favorites
- Add automated tests for backend routes
- Add API documentation (Swagger or Postman)
- Add CI/CD pipelines
