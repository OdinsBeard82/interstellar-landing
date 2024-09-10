import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ selectedMovieData }) => {
    return (
        <div className="movie-details">
            <img
                src={`https://image.tmdb.org/t/p/w500${selectedMovieData.poster_path}`}
                alt={selectedMovieData.title}
            />
            <p>{selectedMovieData.overview}</p>
            <p className="release-date">Release Date: {selectedMovieData.release_date}</p>
        </div>
    );
};

export default MovieDetails;
