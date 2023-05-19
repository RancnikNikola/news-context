import React, { useEffect, useRef, useState } from 'react';
import './text-carousel.styles.scss'; // Import CSS styles for the carousel

const TextCarousel = ({ texts, duration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically advance to the next item after a specified duration
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);

    return () => {
      clearInterval(timer);
    };
  }, [texts.length, duration]);

  return (
    <div className="carousel-container">
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 40}%)` }}>
        {texts.map((text, index) => (
          <div key={index} className="carousel-item">
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
