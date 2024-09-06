import React, { useEffect, useState } from 'react';
// Imports React and hooks (useEffect and useState) from the 'react' library for building the component and managing state.

import { fetchInterstellarDetails } from './services/tmdbApi';
// Imports the function fetchInterstellarDetails from the 'services/tmdbApi' module to fetch movie data.

import './App.css';
// Imports the CSS file for styling the component.

function App() {
  // Defines the App component as a functional React component.

  const [movieData, setMovieData] = useState(null);
  // Defines state variable 'movieData' to store the movie details. Initializes it with null.

  const [error, setError] = useState(null);
  // Defines state variable 'error' to store any error message. Initializes it with null.

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Defines state variable 'currentImageIndex' to track the index of the currently displayed image. Initializes it with 0.

  const [selectedSection, setSelectedSection] = useState('Miller\'s Planet');
  // Defines state variable 'selectedSection' to store the currently selected section from the dropdown. Initializes it with 'Miller\'s Planet'.

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
  // useEffect hook to fetch movie data once the component mounts. It updates the 'movieData' state with the fetched data or 'error' if fetching fails.

  if (error) return <p>{error}</p>;
  // Displays an error message if there was an error fetching movie data.

  if (!movieData) return <p>Loading...</p>;
  // Displays a loading message if the movie data has not been fetched yet.

  // Define images for each section
  const images = {
    'Miller\'s Planet': [
      'https://image.tmdb.org/t/p/original/bzONet3OeCTz5q9WOkGjVpOHMSR.jpg',
      'https://image.tmdb.org/t/p/original/zrwNvkdYXrgFea41AxhJhIKopov.jpg',
      'https://image.tmdb.org/t/p/original/lwfl4JPDJQN5xoA0JLeNbgDRXcA.jpg'
    ],
    'Space': [
      'https://image.tmdb.org/t/p/original/mS4EvhsrT0SQZOlWrQEzWI5KiUa.jpg'
    ]
  };
  // Defines an object 'images' that maps each section to an array of image URLs.

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[selectedSection].length);
  };
  // Function to handle showing the next image. Updates 'currentImageIndex' to the next index in the array, looping back to 0 if at the end.

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images[selectedSection].length) % images[selectedSection].length);
  };
  // Function to handle showing the previous image. Updates 'currentImageIndex' to the previous index in the array, looping back to the end if at the beginning.

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
    setCurrentImageIndex(0); // Reset index when changing sections
  };
  // Function to handle changing the selected section from the dropdown. Updates 'selectedSection' and resets 'currentImageIndex' to 0.

  return (
    <div className="App">
      <header className="App-header">
        <h1>{movieData.title}</h1>
      </header>
      {/* Displays the title of the movie in the header section. */}

      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.title}
        />
        <p>{movieData.overview}</p>
        <p className="release-date">Release Date: {movieData.release_date}</p>
      </div>
      {/* Displays the movie poster, overview, and release date in the movie details section. */}

      <div className="view-through-section">
        <h2>View Through Interstellar</h2>
        <div className="dropdown-container">
          <label htmlFor="section-select">Choose a section:</label>
          <select id="section-select" value={selectedSection} onChange={handleSectionChange}>
            <option value="Miller's Planet">Miller's Planet</option>
            <option value="Space">Space</option>
          </select>
        </div>
        {/* Dropdown menu to select different sections and trigger 'handleSectionChange' when an option is selected. */}

        <div className="image-viewer">
          <img
            className="current-image"
            src={images[selectedSection][currentImageIndex]}
            alt={`Backdrop ${currentImageIndex}`}
          />
          <div className="image-controls">
            <button onClick={handlePreviousImage}>Previous</button>
            <button onClick={handleNextImage}>Next</button>
          </div>
        </div>
        {/* Displays the currently selected image and provides buttons to navigate through images. */}
      </div>

      <footer className="footer">
        <p>Interstellar - A Journey Through Space and Time</p>
      </footer>
      {/* Footer with a description of the site. */}
    </div>
  );
}

export default App;
