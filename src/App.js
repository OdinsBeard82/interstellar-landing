import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import MovieContainer from './components/MovieContainer';
import MovieTrailers from './components/MovieTrailers';
import Dropdown from './components/Dropdown'; // Import Dropdown
import MovieDetails from './components/MovieDetails'; // Import MovieDetails
import { fetchMovieDetails } from './services/tmdbApi';
import './App.css';

const App = () => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState('Interstellar'); // State for selected movie

  const movieListForContainer = useMemo(() => [
    { title: 'Interstellar', className: 'interstellar' },
    { title: 'Arrival', className: 'arrival' },
    { title: 'Blade Runner', className: 'blade-runner' },
    { title: '2001: A Space Odyssey', className: 'space-odyssey' },
    { title: 'The Matrix', className: 'matrix' },
    { title: 'Inception', className: 'inception' },
    { title: 'Starship Troopers', className: 'starship-troopers' },
    { title: 'Back to the Future', className: 'back-to-the-future' },
    { title: 'Looper', className: 'looper' },
    { title: 'The Martian', className: 'martian' },
    { title: 'Dune', className: 'dune' },
    { title: 'E.T.', className: 'et' },
    { title: 'The Fifth Element', className: 'fifth-element' },
    { title: 'Ex Machina', className: 'ex-machina' },
    { title: 'Her', className: 'her' },
  ], []);

  const movieListForTrailers = useMemo(() => {
    return movies.map(movie => ({
      title: movie.title,
      poster_path: movie.images?.posters[0]?.file_path || '/placeholder-image.jpg', // Fallback image
    }));
  }, [movies]);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const promises = movieListForContainer.map(movie => fetchMovieDetails(movie.title));
        const responses = await Promise.all(promises);
        const movieDetails = responses.map(response => response.data);
        setMovies(movieDetails);
      } catch (err) {
        setError('Failed to fetch movie data.');
      }
    };
    getMoviesData();
  }, [movieListForContainer]);

  if (error) return <p>{error}</p>;
  if (movies.length === 0) return <p>Loading...</p>;

  const selectedMovieData = movies.find(movie => movie.title === selectedMovie);

  if (!selectedMovieData) return <p>Movie not found.</p>;

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % movies.length);
  };

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
      <MovieContainer allMovies={movieListForContainer} />
      <MovieTrailers allMovies={movieListForTrailers} />
      <Dropdown
        movieOptions={movieListForContainer.map(movie => movie.title)}
        selectedMovie={selectedMovie}
        handleMovieChange={handleMovieChange}
      />
      <MovieDetails selectedMovieData={selectedMovieData} />
    </div>
  );
};

export default App;
