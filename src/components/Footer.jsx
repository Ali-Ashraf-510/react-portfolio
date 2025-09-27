// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} glass-surface`} role="contentinfo">
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.brandLogo}>
              <span className={`${styles.logoText} text-gradient-cosmic`}>AA</span>
              <div className={styles.logoRing}></div>
            </div>
            <div className={styles.brandInfo}>
              <h3 className={`${styles.brandName} text-gradient-primary`}>Ali Ashraf</h3>
              <p className={styles.brandTagline}>Machine Learning Engineer</p>
              <p className={styles.footerText}>
                <i className="fas fa-heart text-gradient-accent" aria-hidden="true"></i>
                Crafted with passion for AI innovation
              </p>
            </div>
          </div>

          <div className={styles.footerNav}>
            <h4 className={styles.navTitle}>Quick Links</h4>
            <div className={styles.footerLinks}>
              <Link to="/about" className={styles.footerLink}>
                <i className="fas fa-user" aria-hidden="true"></i>
                <span>About</span>
              </Link>
              <Link to="/projects" className={styles.footerLink}>
                <i className="fas fa-code" aria-hidden="true"></i>
                <span>Projects</span>
              </Link>
              <Link to="/certificates" className={styles.footerLink}>
                <i className="fas fa-award" aria-hidden="true"></i>
                <span>Certificates</span>
              </Link>
              <Link to="/contact" className={styles.footerLink}>
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>Contact</span>
              </Link>
            </div>
          </div>

          <div className={styles.footerSocial}>
            <h4 className={styles.socialTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              <a 
                href="https://linkedin.com/in/aliashraf" 
                className={`${styles.socialLink} linkedin`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a 
                href="https://github.com/aliashraf" 
                className={`${styles.socialLink} github`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub Profile"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a 
                href="mailto:ali@example.com" 
                className={`${styles.socialLink} email`}
                aria-label="Send Email"
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <div className={styles.footerStats}>
              <div className="stat-item">
                <span className={`${styles.statNumber} text-gradient-secondary`}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className="stat-item">
                <span className={`${styles.statNumber} text-gradient-accent`}>20+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerGradientLine}></div>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              &copy; 2025 Ali Ashraf. All rights reserved.
            </p>
            <div className={styles.footerTech}>
              <span className={styles.techLabel}>Built with</span>
              <div className={styles.techIcons}>
                <span className={styles.techIcon} title="React">
                  <i className="fab fa-react" aria-hidden="true"></i>
                </span>
                <span className={styles.techIcon} title="Vite">
                  <i className="fas fa-bolt" aria-hidden="true"></i>
                </span>
                <span className={styles.techIcon} title="CSS3">
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