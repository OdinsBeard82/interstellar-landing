import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Indicators from './components/Indicators';
import MovieContainer from './components/MovieContainer';
import MovieTrailers from './components/MovieTrailers';
import Dropdown from './components/Dropdown';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import { fetchMovieDetails } from './services/tmdbApi';
import './App.css';

const App = () => {
  // State hooks
  const [error, setError] = useState(null); // To store error messages
  const [movies, setMovies] = useState([]); // To store movie data
  const [currentSlide, setCurrentSlide] = useState(0); // To track the current slide in the carousel
  const [selectedMovie, setSelectedMovie] = useState('Interstellar'); // To store the selected movie title

  // Memoized list of movies for the MovieContainer component
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
    { title: 'Minority Report', className: 'minority-report' },
    { title: 'Gattaca', className: 'gattaca' },
    { title: 'Total Recall', className: 'total-recall' }, // New movie
  ], []);

  // Memoized list of movies for the MovieTrailers component
  const movieListForTrailers = useMemo(() => {
    return movies.map(movie => ({
      title: movie.title,
      poster_path: movie.images?.posters[0]?.file_path || '/placeholder-image.jpg',
    }));
  }, [movies]);

  // Fetch movie data when the component mounts or movieListForContainer changes
  useEffect(() => {
    const getMoviesData = async () => {
      try {
        // Fetch details for each movie in the list
        const promises = movieListForContainer.map(movie => fetchMovieDetails(movie.title));
        const responses = await Promise.all(promises);
        // Extract movie details from responses
        const movieDetails = responses.map(response => response.data);
        setMovies(movieDetails); // Update state with fetched movie details
      } catch (err) {
        setError('Failed to fetch movie data.'); // Set error message if fetch fails
      }
    };
    getMoviesData();
  }, [movieListForContainer]);

  // Conditional rendering
  if (error) return <p>{error}</p>; // Show error message if there was an error
  if (movies.length === 0) return <p>Loading...</p>; // Show loading message while fetching data

  // Find the data for the selected movie
  const selectedMovieData = movies.find(movie => movie.title === selectedMovie);

  if (!selectedMovieData) return <p>Movie not found.</p>; // Show message if selected movie is not found

  // Handle changes to the selected movie in the dropdown
  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  // Handle carousel slide navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % movies.length);
  };

  return (
    <div className="App">
      <Header /> {/* Render the header component */}
      <Carousel
        movies={movies}
        currentSlide={currentSlide}
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
        setCurrentSlide={setCurrentSlide}
      /> {/* Render the carousel component */}
      <Indicators
        movies={movies}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      /> {/* Render the indicators component */}
      <MovieContainer allMovies={movieListForContainer} /> {/* Render the movie container component */}
      <MovieTrailers allMovies={movieListForTrailers} /> {/* Render the movie trailers component */}
      <Dropdown
        movieOptions={movieListForContainer.map(movie => movie.title)}
        selectedMovie={selectedMovie}
        handleMovieChange={handleMovieChange}
      /> {/* Render the dropdown component */}
      <MovieDetails selectedMovieData={selectedMovieData} /> {/* Render the movie details component */}
      <Footer /> {/* Render the footer component */}
    </div>
  );
};

export default App;
