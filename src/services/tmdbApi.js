import axios from 'axios';

// Base URL for TMDb API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Function to fetch Interstellar movie details
export const fetchInterstellarDetails = () => {
    return axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,
            query: 'Interstellar'
        }
    });
};
