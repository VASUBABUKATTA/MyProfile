import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MyProfile. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/" className="footer-link">Privacy Policy</a>
        <a href="/" className="footer-link">Terms of Service</a>
        <a href="/contact" className="footer-link">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
