// src/routes/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TypewriterEffect from '../components/TypewriterEffect';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.heroSection} hero-section`} id="home" aria-label="Introduction">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className={`${styles.heroContent} hero-content text-center`}>
                <h1 className="hero-title">
                  <span className={styles.heroGreeting}>Hello, I'm</span>
                  <span className={`${styles.heroName} gradient-text`}>Ali Ashraf</span>
                </h1>
                <h2 className={styles.heroSubtitle}>
                  <TypewriterEffect 
                    words={[
                      'Machine Learning Engineer',
                      'Deep Learning Specialist', 
                      'Frontend Developer',
                      'AI Enthusiast'
                    ]}
                    typeSpeed={100}
                    deleteSpeed={50}
                    pauseTime={2000}
                  />
                </h2>
                <p className={styles.heroDescription}>Crafting intelligent solutions with cutting-edge algorithms and data-driven insights to solve real-world challenges.</p>
                <div className={styles.heroActions}>
                  {/* Replaced anchor tags with React Router's Link component for SPA navigation */}
                  <Link to="/projects" className="btn-primary-gradient" role="button">
                    <span>Explore My Work</span>
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                  <Link to="/contact" className="btn-outline" role="button">
                    <span>Let's Connect</span>
                  </Link>
                </div>
                <div className={styles.heroStats}>
                  <div className={styles.statItem}><span className={styles.statNumber}>98%</span><span className={styles.statLabel}>Model Accuracy</span></div>
                  <div className={styles.statItem}><span className={styles.statNumber}>1+</span><span className={styles.statLabel}>Years Experience</span></div>
                  <div className={styles.statItem}><span className={styles.statNumber}>100%</span><span className={styles.statLabel}>Passion Driven</span></div>
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