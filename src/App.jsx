import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Video from './components/videos';
import Equipos from './components/Equipos';
import './App.css';

const Photos = () => <div className="page">Photos Coming Soon!</div>;

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Video />} />
          <Route path="/team" element={<Equipos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
