import React, { useEffect, useState } from 'react';
import { fetchInterstellarDetails } from './services/tmdbApi';
import './App.css';

function App() {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for tracking current image

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
    .filter((image, index, self) => self.findIndex(img => img.file_path === image.file_path) === index);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % uniqueImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + uniqueImages.length) % uniqueImages.length);
  };

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

      <div className="view-through-section">
        <h2>View Through Interstellar</h2>
        <div className="image-viewer">
          <img
            className="current-image"
            src={`https://image.tmdb.org/t/p/w500${uniqueImages[currentImageIndex].file_path}`}
            alt={`Backdrop ${currentImageIndex}`}
          />
          <div className="image-controls">
            <button onClick={handlePreviousImage}>Previous</button>
            <button onClick={handleNextImage}>Next</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>Interstellar - A Journey Through Space and Time</p>
      </footer>
    </div>
  );
}

export default App;
