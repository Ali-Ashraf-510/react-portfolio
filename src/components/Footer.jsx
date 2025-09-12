// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer glass-surface" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-text text-gradient-cosmic">AA</span>
              <div className="logo-ring"></div>
            </div>
            <div className="brand-info">
              <h3 className="brand-name text-gradient-primary">Ali Ashraf</h3>
              <p className="brand-tagline">Machine Learning Engineer</p>
              <p className="footer-text">
                <i className="fas fa-heart text-gradient-accent" aria-hidden="true"></i>
                Crafted with passion for AI innovation
              </p>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="nav-title">Quick Links</h4>
            <div className="footer-links">
              <Link to="/about" className="footer-link">
                <i className="fas fa-user" aria-hidden="true"></i>
                <span>About</span>
              </Link>
              <Link to="/projects" className="footer-link">
                <i className="fas fa-code" aria-hidden="true"></i>
                <span>Projects</span>
              </Link>
              <Link to="/certificates" className="footer-link">
                <i className="fas fa-award" aria-hidden="true"></i>
                <span>Certificates</span>
              </Link>
              <Link to="/contact" className="footer-link">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>Contact</span>
              </Link>
            </div>
          </div>

          <div className="footer-social">
            <h4 className="social-title">Connect</h4>
            <div className="social-links">
              <a 
                href="https://linkedin.com/in/aliashraf" 
                className="social-link linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a 
                href="https://github.com/aliashraf" 
                className="social-link github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub Profile"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a 
                href="mailto:ali@example.com" 
                className="social-link email"
                aria-label="Send Email"
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number text-gradient-secondary">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-gradient-accent">20+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-gradient-line"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2025 Ali Ashraf. All rights reserved.
            </p>
            <div className="footer-tech">
              <span className="tech-label">Built with</span>
              <div className="tech-icons">
                <span className="tech-icon" title="React">
                  <i className="fab fa-react" aria-hidden="true"></i>
                </span>
                <span className="tech-icon" title="Vite">
                  <i className="fas fa-bolt" aria-hidden="true"></i>
                </span>
                <span className="tech-icon" title="CSS3">
                  <i className="fab fa-css3-alt" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;