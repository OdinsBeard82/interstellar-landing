import React from 'react';

const Carousel = ({ movies, currentSlide, handlePrevSlide, handleNextSlide, setCurrentSlide }) => {
    return (
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
    );
};

export default Carousel;
