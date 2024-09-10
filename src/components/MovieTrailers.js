import React from 'react';
import './MovieTrailers.css';

const MovieTrailers = ({ allMovies }) => {
    return (
        <div className="trailers-container">
            {allMovies.map((movie, index) => (
                <div key={index} className="trailer-item">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                        className="trailer-image"
                    />
                    <h3>{`${movie.title} Trailer`}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieTrailers;
