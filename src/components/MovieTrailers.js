import React from 'react';
import './MovieTrailers.css';

const MovieTrailers = ({ allMovies }) => {
    // This function shows a list of movie trailers
    return (
        <div className="trailers-container"> {/* This is the main container for all trailer items */}
            {allMovies.map((movie, index) => ( // Go through each movie in the list
                <div key={index} className="trailer-item"> {/* Each trailer item */}
                    {/* Show the movie poster */}
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`${movie.title} Poster`} // Text shown if image can't load
                        className="trailer-image" // Style for the image
                    />
                    {/* Show the movie title with "Trailer" */}
                    <h3>{`${movie.title} Trailer`}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieTrailers; 
