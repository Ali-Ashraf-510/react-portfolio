// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, openModal }) => {
  const {
    title, image, description, status, metrics, features,
    techStack, githubUrl, demoUrl
  } = project;

  // The inline onclick function is replaced by a React onClick handler
  // which calls the `openModal` function passed down from App.jsx.
  const handleImageClick = () => {
    openModal({
      title,
      image,
      description,
      type: 'project',
    });
  };

  return (
    <article className="glass-card project-card">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={`${title} - Real-time fire detection using CNN`}
          className="project-image clickable-image"
          loading="lazy"
          onClick={handleImageClick}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick()}
          role="button"
          tabIndex="0"
        />
        <div className="project-overlay">
          <div className="project-metrics">
            {metrics.map((metric, index) => (
              <span key={index} className="metric">{metric}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-content">
        <header className="project-header">
          <h3 className="project-title">{title}</h3>
          <div className="project-status">
            <span className={`status-badge status-${status.toLowerCase()}`}>{status}</span>
          </div>
        </header>

        <p className="project-description">{description}</p>

        <div className="project-features">
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className={`tech-tag ${index === 0 ? 'primary' : ''}`}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={githubUrl}
            className="btn-primary-gradient"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} project on GitHub`}
          >
            <i className="fab fa-github" aria-hidden="true"></i>
            <span>View on GitHub</span>
          </a>
          <a
            href={demoUrl}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
            aria-label={`View ${title} project demo`}
          >
            <i className="fas fa-play" aria-hidden="true"></i>
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;