![Project Screenshot](./assets/screenshot.png)

# 🪐 Sci-Fi Movie Landing Page
## 🔗 Live Demo

- **Production (Vercel)**: [Live Demo](https://interstellar-landing-git-master-odinsbeard82s-projects.vercel.app/)
- **Backend API (Render)**: [API Endpoint](https://interstellar-landing.onrender.com)

This is a fullstack movie app built around the TMDB API.

I originally built this as a frontend project, but refactored it into a proper client/server setup once I realized exposing API keys in the browser was bad practice.

The app now uses a Node + Express backend that handles all communication with TMDB. The frontend only talks to my own API.

Why I Reworked It

I wanted to move beyond static projects and actually build something that reflects how production apps work:

API keys should not live in frontend code

Clients shouldn’t call third-party APIs directly

Environment variables should be managed properly

Frontend and backend should deploy independently

This project is where I made that shift.

How It Works

Browser
→ calls my backend (/api/...)
→ backend requests data from TMDB
→ backend returns sanitized response

The API key lives in an environment variable on the server.

Backend Stack

Node.js

Express

REST-style routes

Environment variables

CORS configuration

Example routes:

GET /api/movies/popular
GET /api/movies/:id

The backend acts as a proxy and keeps credentials private.

Deployment

Frontend and backend are deployed separately.

The backend runs as a cloud service with environment variables configured in production.

The frontend is static and communicates only with the deployed backend URL.

This runs entirely without needing a local development server.

If I Extended This Further

Next logical steps would be:

Add user accounts and JWT authentication

Add a database for storing favourites

Add request validation

Add automated tests
