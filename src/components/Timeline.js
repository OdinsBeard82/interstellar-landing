import React from 'react';
import './Timeline.css';

const Timeline = ({ scenes }) => {
    return (
        <div className="timeline">
            {scenes.map((scene, index) => (
                <div key={index} className="timeline-item">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${scene.image_path}`}
                        alt={scene.title}
                    />
                    <div className="timeline-content">
                        <h2>{scene.title}</h2>
                        <p>{scene.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
