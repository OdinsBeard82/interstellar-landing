import React from 'react';

const Dropdown = ({ movieOptions, selectedMovie, handleMovieChange }) => {
    return (
        <div className="dropdown-container">
            <label htmlFor="movie-select">Choose a Sci-Fi Movie:</label>
            <select id="movie-select" value={selectedMovie} onChange={handleMovieChange}>
                {movieOptions.map((movie) => (
                    <option key={movie} value={movie}>
                        {movie}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
