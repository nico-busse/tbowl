import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Thanksgiving Bowl 2025</h1>
        <p>Estan listos para jugar!</p>
        <a 
          href="https://forms.google.com/signup-form" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          Registrate
        </a>
      </div>
    </div>
  );
};

export default Hero; 