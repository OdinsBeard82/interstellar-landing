import React, { useEffect, useState } from 'react';
import { fetchInterstellarDetails } from './services/tmdbApi';
import './App.css';

function App() {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await fetchInterstellarDetails();
        setMovieData(response.data.results[0]);
      } catch (err) {
        setError('Failed to fetch movie data.');
      }
    };
    getMovieData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!movieData) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>{movieData.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt={movieData.title}
      />
      <p>{movieData.overview}</p>
      <p className="release-date">Release Date: {movieData.release_date}</p>

      <footer className="footer">
        <p>Interstellar - A Journey Through Space and Time</p>
      </footer>
    </div>
  );
}

export default App;
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log('API Key:', API_KEY); // Check if this logs the correct key
