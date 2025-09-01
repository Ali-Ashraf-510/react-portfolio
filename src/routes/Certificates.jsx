// src/routes/Certificates.jsx
import React from 'react';
import CertificateCard from '../components/CertificateCard'; // <-- Make sure this import is correct

// Importing image assets
import hciaImg from '../assets/Certifications/HCIA.png';
import ntiImg from '../assets/Certifications/NTI.jpg';
import depiFrontendImg from '../assets/Certifications/DEPI front end.png';
import depiEnglishImg from '../assets/Certifications/DEPI english.png';

// Certificate data is structured for easy mapping
const certificatesData = [
  {
    id: 1,
    title: 'HCIA Certification',
    issuer: 'Huawei Technologies',
    image: hciaImg,
    description: "Certified in Huawei's AI and cloud computing fundamentals, demonstrating comprehensive expertise in enterprise-level artificial intelligence solutions and infrastructure.",
    skills: ['AI Fundamentals'],
    icon: 'fa-building',
  },
  {
    id: 2,
    title: 'NTI AI Graduate Certification',
    issuer: 'National Telecommunication Institute',
    image: ntiImg,
    description: 'NTI / Huawei Egyptian Talent Academy Track in Artificial Intelligence with 80 comprehensive hours of training and achieved an outstanding score of 98%.',
    achievements: { Score: '98%', Hours: '80h' },
    icon: 'fa-university',
  },
  {
    id: 3,
    title: 'DEPI Front End Graduate Certification',
    issuer: 'Digital Egypt Pioneers Initiative - DEPI',
    image: depiFrontendImg,
    description: 'Successfully achieving excellence in the Digital Egypt Pioneers Program (Software Development – Frontend Developer) from April to October 2024.',
    achievements: { Hours: '160' },
    icon: 'fa-university',
  },
  {
    id: 4,
    title: 'Business English Track',
    issuer: 'Ministry of Communications and Information Technology (MCIT)',
    image: depiEnglishImg,
    description: 'Successfully completed the Business English Track (Round 1) offered by OTO Courses under the sponsorship of the Ministry of Communications and Information Technology, from April to October 2024.',
    skills: ['Business Communication', 'Professional English'],
    icon: 'fa-university',
  }
];

const Certificates = ({ openModal }) => {
  return (
    <section className="certificates-section" id="certificates" aria-label="Professional Certifications">
      <div className="container">
        <header className="section-header text-center mb-5">
          <h2 className="section-title gradient-text">Professional Certifications</h2>
          <p className="section-subtitle">Industry-recognized credentials and achievements</p>
        </header>

        <div className="row g-4 justify-content-center">
          {certificatesData.map((cert) => (
            <div className="col-lg-5 col-md-6" key={cert.id}>
              {/* THIS IS THE FIX 👇 */}
              <CertificateCard certificate={cert} openModal={openModal} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;