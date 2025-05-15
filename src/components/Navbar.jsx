import React from 'react';
import { Link } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <h1>THANKSGIVING BOWL ⚽️</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/photos">Fotos</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/team">Equipos</Link>
        <a href="https://www.instagram.com/thanksgivingbowl/#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 