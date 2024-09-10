import React from 'react';
import './Indicators.css';

const Indicators = ({ movies, currentSlide, setCurrentSlide }) => {
    return (
        <div className="carousel-indicators">
            {/* Create a button for each movie slide */}
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
