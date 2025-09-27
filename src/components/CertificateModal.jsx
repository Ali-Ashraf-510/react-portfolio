// src/components/CertificateModal.jsx
import React, { useEffect, useState, useRef } from 'react';
import styles from './CertificateModal.module.css';

const CertificateModal = ({ isOpen, modalData, onClose }) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const modalRef = useRef();

  // Toggle image zoom state
  const handleImageClick = () => {
    if (modalData?.type === 'project') {
      setIsImageZoomed(!isImageZoomed);
    }
  };

  // Handle keyboard interaction for image zoom
  const handleImageKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && modalData?.type === 'project') {
      e.preventDefault();
      setIsImageZoomed(!isImageZoomed);
    }
  };

  // Reset zoom when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsImageZoomed(false);
    }
  }, [isOpen]);

  // Event listeners for closing the modal
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      // Close if click is on the modal backdrop itself
      if (modalRef.current === e.target) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function removes listeners to prevent memory leaks
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`modal-backdrop ${styles.modalBackdrop} ${isOpen ? `show ${styles.show}` : ''}`} ref={modalRef}>
      <div className={`modal-dialog ${styles.modalDialog} ${modalData?.type === 'project' ? `modal-project ${styles.modalProject}` : ''} ${isImageZoomed ? `image-zoomed ${styles.imageZoomed}` : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className={`modal-content glass-card ${styles.modalContent}`}>
          <div className={`modal-header ${styles.modalHeader}`}>
            <h2 className={`modal-title ${styles.modalTitle}`}>{modalData?.title}</h2>
            <button 
              className={`modal-close-btn ${styles.closeBtn}`} 
              onClick={onClose}
              aria-label="Close modal"
            >
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
          
          <div className={`modal-body ${styles.modalBody}`}>
            <div className={`modal-image-container ${styles.imageContainer} ${modalData?.type === 'project' ? `project-image-container ${styles.projectImageContainer}` : ''}`}>
              <img 
                src={modalData?.image} 
                alt={modalData?.title}
                className={`modal-image ${styles.modalImage} ${modalData?.type === 'project' ? `project-modal-image clickable-image ${styles.projectModalImage}` : ''} ${isImageZoomed ? `zoomed ${styles.zoomed}` : ''}`}
                onClick={modalData?.type === 'project' ? handleImageClick : undefined}
                onKeyDown={modalData?.type === 'project' ? handleImageKeyDown : undefined}
                role={modalData?.type === 'project' ? 'button' : 'img'}
                tabIndex={modalData?.type === 'project' ? '0' : undefined}
              />
              {modalData?.type === 'project' && (
                <div className={`image-controls ${styles.imageControls}`}>
                  <button 
                    className={`zoom-btn ${styles.zoomBtn}`}
                    onClick={handleImageClick}
                    aria-label={isImageZoomed ? 'Zoom out' : 'Zoom in'}
                  >
                    <i className={`fas ${isImageZoomed ? 'fa-search-minus' : 'fa-search-plus'}`} aria-hidden="true"></i>
                  </button>
                </div>
              )}
            </div>
            
            <div className={`modal-info ${styles.modalInfo}`}>
              <p className={`modal-description ${styles.modalDescription}`}>{modalData?.description}</p>
              
              {modalData?.type === 'project' && modalData?.project && (
                <div className={`project-modal-details ${styles.projectModalDetails}`}>
                  <div className={`project-meta ${styles.projectMeta}`}>
                    <div className={`meta-item ${styles.metaItem}`}>
                      <i className="fas fa-calendar" aria-hidden="true"></i>
                      <span>Completed: {new Date(modalData.project.date).toLocaleDateString()}</span>
                    </div>
                    <div className={`meta-item ${styles.metaItem}`}>
                      <i className="fas fa-brain" aria-hidden="true"></i>
                      <span>{modalData.project.mlType.replace('-', ' ')}</span>
                    </div>
                    {modalData.project.algorithm && (
                      <div className={`meta-item ${styles.metaItem}`}>
                        <i className="fas fa-cogs" aria-hidden="true"></i>
                        <span>{modalData.project.algorithm}</span>
                      </div>
                    )}
                  </div>

                  <div className={`project-metrics-modal ${styles.projectMetricsModal}`}>
                    <h4>Performance Metrics</h4>
                    <div className={`metrics-list ${styles.metricsList}`}>
                      {modalData.project.metrics.map((metric, index) => (
                        <span key={index} className={`metric-badge ${styles.metricBadge}`}>{metric}</span>
                      ))}
                    </div>
                  </div>

                  <div className={`project-features-modal ${styles.projectFeaturesModal}`}>
                    <h4>All Features</h4>
                    <ul className={`features-list-modal ${styles.featuresListModal}`}>
                      {modalData.project.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check" aria-hidden="true"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`project-tech-modal ${styles.projectTechModal}`}>
                    <h4>Technologies Used</h4>
                    <div className={`tech-stack-modal ${styles.techStackModal}`}>
                      {modalData.project.techStack.map((tech, index) => (
                        <span key={index} className={`tech-tag-modal ${styles.techTagModal}`}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className={`project-actions-modal ${styles.projectActionsModal}`}>
                    <a
                      href={modalData.project.githubUrl}
                      className="btn-primary-gradient"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" aria-hidden="true"></i>
                      View on GitHub
                    </a>
                    {modalData.project.demoUrl !== '#' && (
                      <a
                        href={modalData.project.demoUrl}
                        className="btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;