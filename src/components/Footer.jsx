// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="footer-text">&copy; 2025 Ali Ashraf. Crafted with passion for AI innovation.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-links">
              {/* Using Link component for internal navigation */}
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/certificates" className="footer-link">Certificates</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;