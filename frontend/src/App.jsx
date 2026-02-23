import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Indicators from './components/Indicators';
import MovieContainer from './components/MovieContainer';
import MovieTrailers from './components/MovieTrailers';
import Dropdown from './components/Dropdown';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Use backend URL from Vite environment variable
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch movies from Render backend
  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const response = await fetch(`${API_URL}/movies/trending`); // <- Correct route
        if (!response.ok) throw new Error("Failed to fetch movies from backend");

        const data = await response.json();
        setMovies(data);

        // Auto-select first movie
        if (data.length > 0) setSelectedMovie(data[0].title);

      } catch (err) {
        console.error(err);
        setError("Failed to fetch movie data.");
      }
    };

    if (API_URL) getMoviesData();
  }, [API_URL]);

  // Prepare trailer data with TMDb full poster URLs
  const movieListForTrailers = useMemo(() => {
    return movies.map(movie => ({
      title: movie.title,
      poster_path: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/placeholder-image.jpg',
    }));
  }, [movies]);

  // Prepare MovieContainer with safe CSS class names
  const movieListForContainer = useMemo(() => {
    return movies.map(movie => ({
      title: movie.title,
      className: movie.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }));
  }, [movies]);

  if (error) return <p>{error}</p>;
  if (movies.length === 0 || !selectedMovie) return <p>Loading...</p>;

  const selectedMovieData = movies.find(movie => movie.title === selectedMovie);
  if (!selectedMovieData) return <p>Loading movie details...</p>;

  const handleMovieChange = (event) => setSelectedMovie(event.target.value);
  const handlePrevSlide = () =>
    setCurrentSlide((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  const handleNextSlide = () =>
    setCurrentSlide((prevIndex) => (prevIndex + 1) % movies.length);

  return (
    <div className="App">
      <Header />

      <Carousel
        movies={movies}
        currentSlide={currentSlide}
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
        setCurrentSlide={setCurrentSlide}
      />

      <Indicators
        movies={movies}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />

      <MovieContainer allMovies={movieListForContainer} />

      <MovieTrailers allMovies={movieListForTrailers} />

      <Dropdown
        movieOptions={movies.map(movie => movie.title)}
        selectedMovie={selectedMovie}
        handleMovieChange={handleMovieChange}
      />

      <MovieDetails selectedMovieData={selectedMovieData} />

      <Footer />
    </div>
  );
};

export default App;