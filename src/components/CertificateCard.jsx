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
    <div className="glass-card certificate-card h-100 animate-fade-in-up">
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
        <div className="certificate-badge glow-accent pulse-accent">
          <i className="fas fa-award" aria-hidden="true"></i>
        </div>
        <div className="certificate-overlay">
          <div className="certificate-gradient-border"></div>
          <div className="certificate-shimmer"></div>
        </div>
      </div>

      <div className="certificate-content">
        <h3 className="certificate-title text-gradient-primary">{title}</h3>
        <p className="certificate-issuer">
          <i className={`fas ${icon} text-gradient-secondary`} aria-hidden="true"></i>
          <span className="issuer-text">{issuer}</span>
        </p>
        <p className="certificate-description">{description}</p>
        
        {skills && (
          <div className="certificate-skills">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="cert-skill glass-surface"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        {achievements && (
          <div className="certificate-achievements">
            {Object.entries(achievements).map(([key, value], index) => (
              <div 
                className="achievement glass-subtle animate-scale-in" 
                key={key}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="achievement-label">{key}:</span>
                <span className="achievement-value text-gradient-accent">{value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="certificate-actions">
          <button 
            className="btn-secondary glow-primary"
            onClick={handleImageClick}
            aria-label={`View ${title} certificate`}
          >
            <i className="fas fa-eye" aria-hidden="true"></i>
            View Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;