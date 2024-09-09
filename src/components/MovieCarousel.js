import React from 'react';
import './MovieCarousel.css';

const MovieCarousel = ({ movies, currentSlide, handlePrevSlide, handleNextSlide, setCurrentSlide, selectedMovieData, selectedMovie, handleMovieChange, movieOptions }) => {
    return (
        <section className="movie-carousel">
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

            <div className="carousel-container">
                <button className="carousel-control left" onClick={handlePrevSlide}>◀</button>
                <div className="carousel">
                    {movies.map((movie, index) => (
                        <div
                            className="carousel-item"
                            key={movie.id}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </div>
                    ))}
                </div>
                <button className="carousel-control right" onClick={handleNextSlide}>▶</button>
            </div>

            <div className="carousel-indicators">
                {movies.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>

            <div className="movie-details">
                <img
                    src={`https://image.tmdb.org/t/p/w500${selectedMovieData.poster_path}`}
                    alt={selectedMovieData.title}
                />
                <p>{selectedMovieData.overview}</p>
                <p className="release-date">Release Date: {selectedMovieData.release_date}</p>
            </div>
        </section>
    );
};

export default MovieCarousel;
