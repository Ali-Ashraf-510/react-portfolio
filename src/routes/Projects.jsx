// src/routes/Projects.jsx
import React from 'react';
import ProjectFilter from '../components/ProjectFilter';

// Importing image assets
import fireDetectionImg from '../assets/Projects/Fire Detection.png';

// Enhanced projects data with ML-specific categories and algorithms
const projectsData = [
  {
    id: 1,
    title: 'Fire Detection System',
    image: fireDetectionImg,
    description: 'A state-of-the-art CNN-based fire detection model built with MobileNetV2 architecture, achieving over 98% accuracy in real-time fire detection. Optimized for mobile deployment with efficient resource utilization.',
    status: 'Completed',
    category: 'computer-vision',
    mlType: 'deep-learning',
    algorithm: 'Convolutional Neural Network (CNN)',
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
  // Example projects for different ML types - you can replace with your actual projects
  {
    id: 2,
    title: 'House Price Prediction',
    image: fireDetectionImg, // Replace with actual image
    description: 'Linear regression model for predicting house prices based on features like location, size, and amenities. Includes data preprocessing, feature engineering, and model evaluation.',
    status: 'Completed',
    category: 'regression',
    mlType: 'supervised-learning',
    algorithm: 'Linear Regression',
    date: '2024-02-10',
    metrics: ['R² = 0.85', 'RMSE: 15K'],
    features: [
      'Multiple feature analysis',
      'Data visualization',
      'Cross-validation',
      'Feature importance ranking',
    ],
    techStack: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 3,
    title: 'Customer Segmentation',
    image: fireDetectionImg, // Replace with actual image
    description: 'K-Means clustering algorithm to segment customers based on purchasing behavior and demographics. Includes elbow method for optimal cluster selection.',
    status: 'In Progress',
    category: 'clustering',
    mlType: 'unsupervised-learning',
    algorithm: 'K-Means Clustering',
    date: '2024-03-05',
    metrics: ['5 Clusters', 'Silhouette: 0.72'],
    features: [
      'Customer behavior analysis',
      'Optimal cluster selection',
      'Interactive visualizations',
      'Business insights generation',
    ],
    techStack: ['K-Means', 'Scikit-learn', 'Plotly', 'Seaborn'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 4,
    title: 'Email Spam Classification',
    image: fireDetectionImg, // Replace with actual image
    description: 'K-Nearest Neighbors classifier for detecting spam emails using text preprocessing and feature extraction techniques.',
    status: 'Completed',
    category: 'classification',
    mlType: 'supervised-learning',
    algorithm: 'K-Nearest Neighbors (KNN)',
    date: '2024-01-28',
    metrics: ['94% Accuracy', 'F1: 0.93'],
    features: [
      'Text preprocessing pipeline',
      'TF-IDF vectorization',
      'Hyperparameter tuning',
      'Performance optimization',
    ],
    techStack: ['KNN', 'NLTK', 'Scikit-learn', 'TF-IDF'],
    githubUrl: '#',
    demoUrl: '#',
  },
];

const Projects = ({ openModal }) => {
  return (
    <section className="projects-section" id="projects" aria-label="Machine Learning Projects Portfolio">
      <div className="container">
        <header className="section-header text-center mb-5">
          <h2 className="section-title gradient-text">Machine Learning Projects</h2>
          <p className="section-subtitle">Explore different types of ML algorithms and their real-world applications</p>
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