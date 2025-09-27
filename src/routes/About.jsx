// src/routes/About.jsx
import React from 'react';
import profileImage from '../assets/Profile/profile.jpeg';
import SkillsChart from '../components/SkillsChart';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className={`${styles.aboutSection} about-section`} id="about" aria-label="About Ali Ashraf">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <header className="section-header text-center mb-5">
                <h2 className="section-title gradient-text">About Me</h2>
                <p className="section-subtitle">Passionate about transforming data into intelligent solutions</p>
              </header>
              <div className={`glass-card ${styles.aboutCard}`}>
                <div className="row align-items-center">
                  <div className="col-lg-4 text-center mb-4 mb-lg-0">
                    <div className={styles.profileWrapper}>
                      <img 
                        src={profileImage} 
                        alt="Ali Ashraf - Professional headshot" 
                        className={styles.profileImage} 
                        loading="lazy" 
                      />
                      <div className={styles.profileRing}></div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className={styles.aboutContent}>
                      <p className={`${styles.aboutText} lead`}>
                        Hello! I'm <strong>Ali Ashraf</strong>, a passionate Machine Learning Engineer specializing in Deep Learning technologies. With expertise in Python and hands-on experience with frameworks like PyTorch and TensorFlow, I'm dedicated to building intelligent models that address real-world challenges.
                      </p>
                      <p className={styles.aboutText}>
                        From natural language processing to computer vision applications, I thrive on pushing the boundaries of artificial intelligence. My approach combines solid theoretical foundations with practical implementation skills to deliver impactful solutions.
                      </p>
                      <div className={`${styles.aboutHighlights} mt-4`}>
                        <div className={styles.highlightItem}>
                          <i className="fas fa-graduation-cap text-primary" aria-hidden="true"></i>
                          <span>NTI AI Graduate with 98% Score</span>
                        </div>
                        <div className={styles.highlightItem}>
                          <i className="fas fa-certificate text-primary" aria-hidden="true"></i>
                          <span>HCIA Certified Professional</span>
                        </div>
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
      <section className={`${styles.skillsSection} skills-section`} id="skills" aria-label="Technical Skills and Expertise">
        <div className="container">
          <header className="section-header text-center mb-5">
            <h2 className="section-title gradient-text">Core Expertise</h2>
            <p className="section-subtitle">Technologies and frameworks powering intelligent solutions</p>
          </header>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className={`glass-card ${styles.skillCard} h-100`}>
                <div className={styles.skillIcon}><i className="fas fa-brain" aria-hidden="true"></i></div>
                <h3 className={styles.skillTitle}>Machine Learning</h3>
                <p className={styles.skillDescription}>Advanced regression, classification, and clustering algorithms with scikit-learn and custom implementations for predictive modeling.</p>
                <div className={styles.skillTags}><span className={styles.skillTag}>Scikit-learn</span><span className={styles.skillTag}>Pandas</span><span className={styles.skillTag}>NumPy</span></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`glass-card ${styles.skillCard} h-100`}>
                <div className={styles.skillIcon}><i className="fas fa-network-wired" aria-hidden="true"></i></div>
                <h3 className={styles.skillTitle}>Deep Learning</h3>
                <p className={styles.skillDescription}>Convolutional Neural Networks, Recurrent Networks, and Transformer architectures for complex AI applications.</p>
                <div className={styles.skillTags}><span className={styles.skillTag}>PyTorch</span><span className={styles.skillTag}>TensorFlow</span><span className={styles.skillTag}>Keras</span></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`glass-card ${styles.skillCard} h-100`}>
                <div className={styles.skillIcon}><i className="fas fa-eye" aria-hidden="true"></i></div>
                <h3 className={styles.skillTitle}>Computer Vision</h3>
                <p className={styles.skillDescription}>Image processing, object detection, and classification using state-of-the-art CNN architectures and OpenCV.</p>
                <div className={styles.skillTags}><span className={styles.skillTag}>OpenCV</span><span className={styles.skillTag}>MobileNet</span></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`glass-card ${styles.skillCard} h-100`}>
                <div className={styles.skillIcon}><i className="fab fa-python" aria-hidden="true"></i></div>
                <h3 className={styles.skillTitle}>Python Ecosystem</h3>
                <p className={styles.skillDescription}>Comprehensive data science stack with robust ML pipelines, data visualization, and deployment solutions.</p>
                <div className={styles.skillTags}><span className={styles.skillTag}>Jupyter</span><span className={styles.skillTag}>Flask</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default About; // Using default export to prevent the original error