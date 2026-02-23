import React, { useState, useEffect } from 'react';
import './MovieContainer.css';

// MovieContainer component for displaying a list of movies
const MovieContainer = ({ allMovies }) => {
    // State to keep track of the movies currently displayed
    const [visibleMovies, setVisibleMovies] = useState(allMovies.slice(0, 5));

    // State to track the index of the currently displayed movies
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect hook to update the visible movies every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the index for the next set of movies
            const nextIndex = (currentIndex + 5) % allMovies.length;
            // Update the visible movies to show the next set
            setVisibleMovies(allMovies.slice(nextIndex, nextIndex + 5));
            // Update the current index
            setCurrentIndex(nextIndex);
        }, 2500); // Update every 2.5 seconds

        // Clear the interval when the component is unmounted or dependencies change
        return () => clearInterval(interval);
    }, [currentIndex, allMovies]);

    // Render the container with the visible movies
    return (
        <div className="movies-container">
            {visibleMovies.map((movie, index) => (
                <div key={index} className={`movie-item ${movie.className}`}>
                    <p>{movie.title}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieContainer;
