import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ selectedMovieData }) => {
    // Render details of the selected movie
    return (
        <div className="movie-details"> {/* Container for movie details */}
            {/* Display the movie poster */}
            <img
                src={`https://image.tmdb.org/t/p/w500${selectedMovieData.poster_path}`}
                alt={selectedMovieData.title}
            />
            {/* Display the movie overview */}
            <p>{selectedMovieData.overview}</p>
            {/* Display the release date of the movie */}
            <p className="release-date">Release Date: {selectedMovieData.release_date}</p>
        </div>
    );
};

export default MovieDetails;
