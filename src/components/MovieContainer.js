import React, { useState, useEffect } from 'react';
import './MovieContainer.css';

const MovieContainer = ({ allMovies }) => {
    const [visibleMovies, setVisibleMovies] = useState(allMovies.slice(0, 5));
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 5) % allMovies.length;
            setVisibleMovies(allMovies.slice(nextIndex, nextIndex + 5));
            setCurrentIndex(nextIndex);
        }, 2500);

        return () => clearInterval(interval);
    }, [currentIndex, allMovies]);

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
