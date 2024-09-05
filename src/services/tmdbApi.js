import axios from 'axios';

// Base URL for TMDb API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Function to fetch the movie ID for "Interstellar"
const fetchMovieId = async () => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,
            query: 'Interstellar'
        }
    });
    return response.data.results[0]?.id; // Return the movie ID
};

// Function to fetch Interstellar movie details including images
export const fetchInterstellarDetails = async () => {
    const movieId = await fetchMovieId();
    if (!movieId) throw new Error('Movie ID not found');

    return axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
            api_key: API_KEY,
            append_to_response: 'images'
        }
    });
};
