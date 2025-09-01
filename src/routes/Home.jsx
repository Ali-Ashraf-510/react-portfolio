// src/routes/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/Profile/profile.jpeg';

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

      {/* About Section */}
      <section className="about-section" id="about" aria-label="About Ali Ashraf">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <header className="section-header text-center mb-5">
                <h2 className="section-title gradient-text">About Me</h2>
                <p className="section-subtitle">Passionate about transforming data into intelligent solutions</p>
              </header>
              <div className="glass-card about-card">
                <div className="row align-items-center">
                  <div className="col-lg-4 text-center mb-4 mb-lg-0">
                    <div className="profile-wrapper">
                      <img src={profileImage} alt="Ali Ashraf - Professional headshot" className="profile-image" loading="lazy" />
                      <div className="profile-ring"></div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="about-content">
                      <p className="about-text lead">
                        Hello! I'm <strong>Ali Ashraf</strong>, a passionate Machine Learning Engineer specializing in Deep Learning technologies. With expertise in Python and hands-on experience with frameworks like PyTorch and TensorFlow, I'm dedicated to building intelligent models that address real-world challenges.
                      </p>
                      <p className="about-text">
                        From natural language processing to computer vision applications, I thrive on pushing the boundaries of artificial intelligence. My approach combines solid theoretical foundations with practical implementation skills to deliver impactful solutions.
                      </p>
                      <div className="about-highlights mt-4">
                        <div className="highlight-item"><i className="fas fa-graduation-cap text-primary" aria-hidden="true"></i><span>NTI AI Graduate with 98% Score</span></div>
                        <div className="highlight-item"><i className="fas fa-certificate text-primary" aria-hidden="true"></i><span>HCIA Certified Professional</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills" aria-label="Technical Skills and Expertise">
        <div className="container">
          <header className="section-header text-center mb-5">
            <h2 className="section-title gradient-text">Core Expertise</h2>
            <p className="section-subtitle">Technologies and frameworks powering intelligent solutions</p>
          </header>
          <div className="row g-4 justify-content-center">
            {/* Cards would be ideal as mapped components if there were more, but this is fine. */}
            <div className="col-lg-3 col-md-6">
              <div className="glass-card skill-card h-100">
                <div className="skill-icon"><i className="fas fa-brain" aria-hidden="true"></i></div>
                <h3 className="skill-title">Machine Learning</h3>
                <p className="skill-description">Advanced regression, classification, and clustering algorithms with scikit-learn and custom implementations for predictive modeling.</p>
                <div className="skill-tags"><span className="skill-tag">Scikit-learn</span><span className="skill-tag">Pandas</span><span className="skill-tag">NumPy</span></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="glass-card skill-card h-100">
                <div className="skill-icon"><i className="fas fa-network-wired" aria-hidden="true"></i></div>
                <h3 className="skill-title">Deep Learning</h3>
                <p className="skill-description">Convolutional Neural Networks, Recurrent Networks, and Transformer architectures for complex AI applications.</p>
                <div className="skill-tags"><span className="skill-tag">PyTorch</span><span className="skill-tag">TensorFlow</span><span className="skill-tag">Keras</span></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="glass-card skill-card h-100">
                <div className="skill-icon"><i className="fas fa-eye" aria-hidden="true"></i></div>
                <h3 className="skill-title">Computer Vision</h3>
                <p className="skill-description">Image processing, object detection, and classification using state-of-the-art CNN architectures and OpenCV.</p>
                <div className="skill-tags"><span className="skill-tag">OpenCV</span><span className="skill-tag">YOLO</span><span className="skill-tag">MobileNet</span></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="glass-card skill-card h-100">
                <div className="skill-icon"><i className="fab fa-python" aria-hidden="true"></i></div>
                <h3 className="skill-title">Python Ecosystem</h3>
                <p className="skill-description">Comprehensive data science stack with robust ML pipelines, data visualization, and deployment solutions.</p>
                <div className="skill-tags"><span className="skill-tag">Jupyter</span><span className="skill-tag">Flask</span><span className="skill-tag">Docker</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;