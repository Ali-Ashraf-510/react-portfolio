// src/routes/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" id="home" aria-label="Introduction">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  <span className="hero-greeting">Hello, I'm</span>
                  <span className="hero-name gradient-text">Ali Ashraf</span>
                </h1>
                <h2 className="hero-subtitle">Machine Learning & Deep Learning Engineer</h2>
                <p className="hero-description">Crafting intelligent solutions with cutting-edge algorithms and data-driven insights to solve real-world challenges.</p>
                <div className="hero-actions">
                  {/* Replaced anchor tags with React Router's Link component for SPA navigation */}
                  <Link to="/projects" className="btn-primary-gradient" role="button">
                    <span>Explore My Work</span>
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                  <Link to="/contact" className="btn-outline" role="button">
                    <span>Let's Connect</span>
                  </Link>
                </div>
                <div className="hero-stats">
                  <div className="stat-item"><span className="stat-number">98%</span><span className="stat-label">Model Accuracy</span></div>
                  <div className="stat-item"><span className="stat-number">1+</span><span className="stat-label">Years Experience</span></div>
                  <div className="stat-item"><span className="stat-number">100%</span><span className="stat-label">Passion Driven</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default Home;