import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profilepic from '../Assets/vasubabu.jpg';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Vasubabbu Katta</h1>
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/portfolio" className="nav-item">Projects</Link></li>
          <li><Link to="/services" className="nav-item">Services</Link></li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
