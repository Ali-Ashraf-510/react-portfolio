// src/components/CertificateModal.jsx
import React, { useEffect, useRef } from 'react';

const CertificateModal = ({ data, onClose }) => {
  const modalRef = useRef();

  // useEffect replaces initModalEventListeners and manual DOM event listeners.
  // It sets up event listeners when the component mounts and cleans them up when it unmounts.
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
    <div
      ref={modalRef}
      id="imageModal"
      className="image-modal active" // 'active' class is always on since we render conditionally
      aria-labelledby="modalTitle"
      aria-modal="true"
      role="dialog"
    >
      <div className="image-modal-content">
        <div className="modal-header">
          <h2 id="modalTitle" className="modal-title">{data.title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="modal-image-container">
          <img id="modalImage" className="modal-image" src={data.image} alt={data.title} />
        </div>
        <div className="modal-body">
          <p id="modalDescription" className="modal-description">{data.description}</p>
          <div id="modalMeta" className="modal-meta">
            <div className="modal-meta-item">
              <i className={`fas ${data.type === 'project' ? 'fa-folder-open' : 'fa-certificate'}`} aria-hidden="true"></i>
              <span>{data.type === 'project' ? 'Project' : 'Certification'}</span>
            </div>
            {data.type === 'project' && (
              <div className="modal-meta-item">
                <i className="fas fa-code" aria-hidden="true"></i>
                <span>Machine Learning</span>
              </div>
            )}
            {data.type === 'certificate' && (
              <div className="modal-meta-item">
                <i className="fas fa-graduation-cap" aria-hidden="true"></i>
                <span>Professional Development</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;