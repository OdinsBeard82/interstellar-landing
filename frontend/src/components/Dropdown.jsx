import React from 'react';

const Dropdown = ({ movieOptions, selectedMovie, handleMovieChange }) => {
    return (
        <div className="dropdown-container">
            {/* Label for the dropdown menu */}
            <label htmlFor="movie-select">Choose a Sci-Fi Movie:</label>

            {/* Dropdown menu to select a movie */}
            <select id="movie-select" value={selectedMovie} onChange={handleMovieChange}>
                {/* Create an option for each movie */}
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
