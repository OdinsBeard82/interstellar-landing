import React from 'react';
import './Carousel.css';


const Carousel = ({ movies, currentSlide, handlePrevSlide, handleNextSlide }) => {
    return (
        <div className="carousel-container">
            {/* Button to go to the previous slide */}
            <button className="carousel-control left" onClick={handlePrevSlide}>‹</button>

            {/* Container for the carousel slides */}
            <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {/* Display each movie as a slide */}
                {movies.map((movie, index) => (
                    <div key={index} className="carousel-item">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>

            {/* Button to go to the next slide */}
            <button className="carousel-control right" onClick={handleNextSlide}>›</button>
        </div>
    );
};

export default Carousel;
