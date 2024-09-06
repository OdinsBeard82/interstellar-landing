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

  const uniqueImages = movieData.images.backdrops
    .filter((image, index, self) => self.findIndex(img => img.file_path === image.file_path) === index)
    .slice(0, 5);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})` }}>
        <div className="hero-content">
          <h1>{movieData.title}</h1>
          <p>A Journey Through Space and Time</p>
          <button className="cta-button">Explore More</button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
          />
        </div>
        <div className="movie-info">
          <h2>About the Movie</h2>
          <p>{movieData.overview}</p>
          <p className="release-date">Release Date: {movieData.release_date}</p>
        </div>
      </section>

      {/* Space-Time Sections */}
      <section className="space-time-sections">
        <h2>Space-Time Exploration</h2>
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
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Interstellar - A Journey Through Space and Time</p>
      </footer>
    </div>
  );
}

export default App;
