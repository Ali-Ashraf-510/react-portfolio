// src/routes/Projects.jsx
import React from 'react';
import ProjectFilter from '../components/ProjectFilter';

// Importing image assets
import fireDetectionImg from '../assets/Projects/Fire Detection.png';

// Enhanced projects data with categories and dates for filtering
const projectsData = [
  {
    id: 1,
    title: 'Fire Detection System',
    image: fireDetectionImg,
    description: 'A state-of-the-art CNN-based fire detection model built with MobileNetV2 architecture, achieving over 98% accuracy in real-time fire detection. Optimized for mobile deployment with efficient resource utilization.',
    status: 'Completed',
    category: 'computer-vision',
    date: '2024-01-15',
    metrics: ['98% Accuracy', 'Real-time'],
    features: [
      'Real-time processing capability',
      'Mobile-optimized architecture',
      'High accuracy detection (98%+)',
      'Low computational overhead',
    ],
    techStack: ['MobileNetV2', 'Computer Vision', 'PyTorch', 'OpenCV'],
    githubUrl: 'https://github.com/Ali-Ashraf-510/FireDetectionApp',
    demoUrl: 'https://www.linkedin.com/posts/ali-ashraf-8b619b22a_ai-deeplearning-tensorflow-activity-7356086060134653952-cm_f?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlWFEoBXZCDOatxLUNOb9A4uVa4pg-laiw',
  },
  // Add more project objects here in the future
];

const Projects = ({ openModal }) => {
  return (
    <section className="projects-section" id="projects" aria-label="Featured Projects Portfolio">
      <div className="container">
        <header className="section-header text-center mb-5">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">Innovative solutions powered by artificial intelligence</p>
        </header>

        <ProjectFilter 
          projects={projectsData}
          openModal={openModal}
        />
      </div>
    </section>
  );
};

export default Projects;