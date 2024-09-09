import React from 'react';

const Indicators = ({ movies, currentSlide, setCurrentSlide }) => {
    return (
        <div className="carousel-indicators">
            {movies.map((_, index) => (
                <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                ></button>
            ))}
        </div>
    );
};

export default Indicators;
