// src/components/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css';

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
    <article className={`glass-card project-card ${styles.projectCard}`}>
      <div className={`project-image-wrapper ${styles.imageWrapper}`}>
        <img
          src={image}
          alt={`${title} - ${algorithm || 'Machine Learning Project'}`}
          className={`project-image clickable-image ${styles.projectImage}`}
          loading="lazy"
          onClick={handleImageClick}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick()}
          role="button"
          tabIndex="0"
        />
        <div className={`project-overlay ${styles.overlay}`}>
          <div className={`project-overlay-content ${styles.overlayContent}`}>
            <div className={`project-metrics ${styles.metrics}`}>
              {metrics.map((metric, index) => (
                <span key={index} className={`metric ${styles.metric}`}>{metric}</span>
              ))}
            </div>
            <div className={`overlay-actions ${styles.overlayActions}`}>
              <button 
                className={`overlay-btn ${styles.overlayBtn}`}
                onClick={handleImageClick}
                aria-label={`View ${title} details`}
              >
                <i className="fas fa-expand" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`project-content ${styles.content}`}>
        <header className={`project-header ${styles.header}`}>
          <div className={`project-title-group ${styles.titleGroup}`}>
            <h3 className={`project-title ${styles.title}`}>{title}</h3>
            {algorithm && (
              <div className={`algorithm-badge ${styles.algorithmBadge}`}>
                <i className="fas fa-cogs" aria-hidden="true"></i>
                <span>{algorithm}</span>
              </div>
            )}
          </div>
          <div className="project-status">
            <span className={`status-badge status-completed ${styles.statusBadge} ${styles.statusCompleted}`}>
              <i className="fas fa-circle" aria-hidden="true"></i>
              {status}
            </span>
          </div>
        </header>

        {mlType && (
          <div className={`ml-type-indicator ${styles.mlTypeIndicator}`}>
            <i className="fas fa-brain" aria-hidden="true"></i>
            <span className="ml-type-text">
              {mlType.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          </div>
        )}

        <p className={`project-description ${styles.description}`}>{description}</p>

        <div className={`project-features ${styles.features}`}>
          <ul className={`features-list ${styles.featuresList}`}>
            {features.slice(0, 2).map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                {feature}
              </li>
            ))}
            {features.length > 2 && (
              <li className={`features-more ${styles.featuresMore}`}>
                <span>+{features.length - 2} more features</span>
              </li>
            )}
          </ul>
        </div>

        <div className={`tech-stack ${styles.techStack}`}>
          <div className={`tech-tags ${styles.techTags}`}>
            {techStack.slice(0, 3).map((tech, index) => (
              <span key={index} className={`tech-tag ${styles.techTag} ${index === 0 ? styles.primary : ''}`}>
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className={`tech-tag more-tech ${styles.techTag} ${styles.moreTech}`}>+{techStack.length - 3}</span>
            )}
          </div>
        </div>

        <div className={`project-actions ${styles.actions}`}>
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