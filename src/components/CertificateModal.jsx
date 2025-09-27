// src/components/CertificateModal.jsx
import React, { useEffect, useState, useRef } from 'react';

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
    <div className={`modal-backdrop ${isOpen ? 'show' : ''}`} onClick={handleOverlayClick}>
      <div className={`modal-dialog ${modalData?.type === 'project' ? 'modal-project' : ''} ${isImageZoomed ? 'image-zoomed' : ''}`} onClick={(e) => e.stopPropagation()} ref={modalRef}>
        <div className="modal-content glass-card">
          <div className="modal-header">
            <h2 className="modal-title">{modalData?.title}</h2>
            <button 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Close modal"
            >
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
          
          <div className="modal-body">
            <div className={`modal-image-container ${modalData?.type === 'project' ? 'project-image-container' : ''}`}>
              <img 
                src={modalData?.image} 
                alt={modalData?.title}
                className={`modal-image ${modalData?.type === 'project' ? 'project-modal-image clickable-image' : ''} ${isImageZoomed ? 'zoomed' : ''}`}
                onClick={modalData?.type === 'project' ? handleImageClick : undefined}
                onKeyDown={modalData?.type === 'project' ? handleImageKeyDown : undefined}
                role={modalData?.type === 'project' ? 'button' : 'img'}
                tabIndex={modalData?.type === 'project' ? '0' : undefined}
              />
              {modalData?.type === 'project' && (
                <div className="image-controls">
                  <button 
                    className="zoom-btn"
                    onClick={handleImageClick}
                    aria-label={isImageZoomed ? 'Zoom out' : 'Zoom in'}
                  >
                    <i className={`fas ${isImageZoomed ? 'fa-search-minus' : 'fa-search-plus'}`} aria-hidden="true"></i>
                  </button>
                </div>
              )}
            </div>
            
            <div className="modal-info">
              <p className="modal-description">{modalData?.description}</p>
              
              {modalData?.type === 'project' && modalData?.project && (
                <div className="project-modal-details">
                  <div className="project-meta">
                    <div className="meta-item">
                      <i className="fas fa-calendar" aria-hidden="true"></i>
                      <span>Completed: {new Date(modalData.project.date).toLocaleDateString()}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-brain" aria-hidden="true"></i>
                      <span>{modalData.project.mlType.replace('-', ' ')}</span>
                    </div>
                    {modalData.project.algorithm && (
                      <div className="meta-item">
                        <i className="fas fa-cogs" aria-hidden="true"></i>
                        <span>{modalData.project.algorithm}</span>
                      </div>
                    )}
                  </div>

                  <div className="project-metrics-modal">
                    <h4>Performance Metrics</h4>
                    <div className="metrics-list">
                      {modalData.project.metrics.map((metric, index) => (
                        <span key={index} className="metric-badge">{metric}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-features-modal">
                    <h4>All Features</h4>
                    <ul className="features-list-modal">
                      {modalData.project.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check" aria-hidden="true"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech-modal">
                    <h4>Technologies Used</h4>
                    <div className="tech-stack-modal">
                      {modalData.project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag-modal">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions-modal">
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