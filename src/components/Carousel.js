import React from 'react';
import './Carousel.css';

const Carousel = ({ movies, currentSlide, handlePrevSlide, handleNextSlide }) => {
    return (
        <div className="carousel-container">
            <button className="carousel-control left" onClick={handlePrevSlide}>‹</button>
            <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {movies.map((movie, index) => (
                    <div key={index} className="carousel-item">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>
            <button className="carousel-control right" onClick={handleNextSlide}>›</button>
        </div>
    );
};

export default Carousel;


