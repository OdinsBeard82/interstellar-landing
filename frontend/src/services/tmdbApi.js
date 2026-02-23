import axios from 'axios';

// Base URL for TMDb API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Function to fetch movie details by title
export const fetchMovieDetails = async (movieTitle) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,
            query: movieTitle
        }
    });

    const movieId = response.data.results[0]?.id;
    if (!movieId) throw new Error('Movie not found');

    // Fetch full movie details including images
    return axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
            api_key: API_KEY,
            append_to_response: 'images'
        }
    });
};
