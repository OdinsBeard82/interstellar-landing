import React, { useEffect, useState, useMemo } from 'react';
import { fetchMovieDetails } from './services/tmdbApi';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Dropdown from './components/Dropdown';
import Indicators from './components/Indicators';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState('Interstellar');
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const movieOptions = useMemo(() => [
    'Interstellar',
    'Arrival',
    'Blade Runner',
    '2001: A Space Odyssey',
    'The Matrix',
    'Inception',
    'Starship Troopers',
    'Back to the Future',
    'Looper',
    'The Martian',
    'Dune',
    'E.T.',
    'The Fifth Element',
    'Ex Machina',
    'Her',
    'Edge of Tomorrow'
  ], []);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const promises = movieOptions.map(movie => fetchMovieDetails(movie));
        const responses = await Promise.all(promises);
        const movieDetails = responses.map(response => response.data);
        setMovies(movieDetails);
      } catch (err) {
        setError('Failed to fetch movie data.');
      }
    };
    getMoviesData();
  }, [movieOptions]);

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
      <Indicators
        movies={movies}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <Dropdown
        movieOptions={movieOptions}
        selectedMovie={selectedMovie}
        handleMovieChange={handleMovieChange}
      />
      <MovieDetails selectedMovieData={selectedMovieData} />
      <footer className="footer">
        <p>© 2024 Sci-Fi Movie Showcase. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
