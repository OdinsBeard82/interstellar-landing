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
        setMovieData(response.data);
      } catch (err) {
        setError('Failed to fetch movie data.');
      }
    };
    getMovieData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!movieData) return <p>Loading...</p>;

  // Ensure that the backdrops array has unique images
  const uniqueImages = movieData.images.backdrops
    .filter((image, index, self) => self.findIndex(img => img.file_path === image.file_path) === index)
    .slice(0, 5);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{movieData.title}</h1>
      </header>
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.title}
        />
        <p>{movieData.overview}</p>
        <p className="release-date">Release Date: {movieData.release_date}</p>
      </div>

      <div className="space-time-sections">
        {uniqueImages.map((image, index) => (
          <div key={index} className="section">
            <img
              className="section-image"
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              alt={`Backdrop ${index}`}
            />
            <p>Scene {index + 1}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>Interstellar - A Journey Through Space and Time</p>
      </footer>
    </div>
  );
}

export default App;
