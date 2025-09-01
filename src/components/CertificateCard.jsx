// src/components/CertificateCard.jsx
import React from 'react';

const CertificateCard = ({ certificate, openModal }) => {
  const { title, issuer, image, description, skills, achievements, icon } = certificate;

  const handleImageClick = () => {
    openModal({
      title,
      image,
      description,
      type: 'certificate',
      issuer,
    });
  };

  return (
    <div className="glass-card certificate-card h-100">
      <div className="certificate-image-wrapper">
        <img
          src={image}
          alt={`${title} from ${issuer}`}
          className="certificate-image clickable-image"
          loading="lazy"
          onClick={handleImageClick}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick()}
          role="button"
          tabIndex="0"
        />
        <div className="certificate-badge">
          <i className="fas fa-award" aria-hidden="true"></i>
        </div>
      </div>

      <div className="certificate-content">
        <h3 className="certificate-title">{title}</h3>
        <p className="certificate-issuer">
          <i className={`fas ${icon}`} aria-hidden="true"></i>
          {issuer}
        </p>
        <p className="certificate-description">{description}</p>
        
        {skills && (
          <div className="certificate-skills">
            {skills.map((skill, index) => (
              <span key={index} className="cert-skill">{skill}</span>
            ))}
          </div>
        )}
        
        {achievements && (
          <div className="certificate-achievements">
            {Object.entries(achievements).map(([key, value]) => (
              <div className="achievement" key={key}>
                <span className="achievement-label">{key}:</span>
                <span className="achievement-value">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;