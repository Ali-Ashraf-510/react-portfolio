// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, openModal }) => {
  const {
    title, image, description, status, metrics, features,
    techStack, githubUrl, demoUrl, algorithm, mlType
  } = project;

  const handleImageClick = () => {
    openModal({
      title,
      image,
      description,
      type: 'project',
      project: project, // Pass full project data for enhanced modal
    });
  };

  return (
    <article className="glass-card project-card">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={`${title} - ${algorithm || 'Machine Learning Project'}`}
          className="project-image clickable-image"
          loading="lazy"
          onClick={handleImageClick}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick()}
          role="button"
          tabIndex="0"
        />
        <div className="project-overlay">
          <div className="project-overlay-content">
            <div className="project-metrics">
              {metrics.map((metric, index) => (
                <span key={index} className="metric">{metric}</span>
              ))}
            </div>
            <div className="overlay-actions">
              <button 
                className="overlay-btn"
                onClick={handleImageClick}
                aria-label={`View ${title} details`}
              >
                <i className="fas fa-expand" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="project-content">
        <header className="project-header">
          <div className="project-title-group">
            <h3 className="project-title">{title}</h3>
            {algorithm && (
              <div className="algorithm-badge">
                <i className="fas fa-cogs" aria-hidden="true"></i>
                <span>{algorithm}</span>
              </div>
            )}
          </div>
          <div className="project-status">
            <span className={`status-badge status-${status.toLowerCase()}`}>
              <i className="fas fa-circle" aria-hidden="true"></i>
              {status}
            </span>
          </div>
        </header>

        {mlType && (
          <div className="ml-type-indicator">
            <i className="fas fa-brain" aria-hidden="true"></i>
            <span className="ml-type-text">
              {mlType.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          </div>
        )}

        <p className="project-description">{description}</p>

        <div className="project-features">
          <ul className="features-list">
            {features.slice(0, 2).map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                {feature}
              </li>
            ))}
            {features.length > 2 && (
              <li className="features-more">
                <span>+{features.length - 2} more features</span>
              </li>
            )}
          </ul>
        </div>

        <div className="tech-stack">
          <div className="tech-tags">
            {techStack.slice(0, 3).map((tech, index) => (
              <span key={index} className={`tech-tag ${index === 0 ? 'primary' : ''}`}>
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="tech-tag more-tech">+{techStack.length - 3}</span>
            )}
          </div>
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
            <span>View Code</span>
          </a>
          {demoUrl !== '#' && (
            <a
              href={demoUrl}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} project demo`}
            >
              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;