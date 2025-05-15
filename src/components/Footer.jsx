import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/photos">Fotos</Link>
          <Link to="/equipos">Equipos</Link>
          <Link to="/team">Equipos</Link>
          <a href="https://forms.google.com/signup-form" target="_blank" rel="noopener noreferrer">
            Sign Up
          </a>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <a href="https://www.instagram.com/thanksgivingbowl/#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> @turkeybowl
          </a>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <p>Desde el 2019, el Thanksgiving Bowl es el partidazo del año. Cuando se reunen las familias para luchar por el titulo.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; QUE MIRA BOBA! ANDA PA ALLA.</p>
      </div>
    </footer>
  );
};

export default Footer; 