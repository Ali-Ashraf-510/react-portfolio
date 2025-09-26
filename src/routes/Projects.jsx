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
      'Real-time fire detection',
      'MobileNetV2 architecture',
      'Optimized for mobile devices',
      'High accuracy (98%+)',
      'Low computational cost',
    ],
    techStack: ['MobileNetV2', 'Computer Vision', 'PyTorch', 'OpenCV'],
    githubUrl: 'https://github.com/Ali-Ashraf-510/FireDetectionApp',
    demoUrl: 'https://www.linkedin.com/posts/ali-ashraf-8b619b22a_ai-deeplearning-tensorflow-activity-7356086060134653952-cm_f?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlWFEoBXZCDOatxLUNOb9A4uVa4pg-laiw',
  },
  {
    id: 2,
    title: 'House Price Predictor',
    image: '../assets/Projects/project image .png', // Replace with actual image
    description: 'Linear regression model for predicting house prices based on features like location, size, and amenities. Includes data preprocessing, feature engineering, and model evaluation.',
    status: 'Completed',
    category: 'regression',
    mlType: 'supervised-learning',
    algorithm: 'Linear Regression',
    date: '2025-09-26',
    metrics: ['R² = 0.85', 'RMSE: 15K'],
    features: [
      'Feature engineering for real estate data',
      'Data preprocessing and cleaning',
      'Model evaluation (R², RMSE)',
      'Visualization of predictions',
      'Supports multiple input features',
    ],
    techStack: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/Ali-Ashraf-510/house-price-predictor-ml',
    demoUrl: '#',
  },
  {
    id: 3,
    title: 'Sales Prediction Linear Regression',
    image: "src/assets/Projects/LR/Sales Prediction App.png", // Replace with actual image
    description: 'Linear regression model to predict future sales based on historical sales data, seasonal trends, and promotional activities. Includes data cleaning, feature engineering, and model evaluation.',
    status: 'Completed',
    category: 'clustering',
    mlType: 'Supervised-learning',
    algorithm: 'Linear Regression',
    date: '2025-09-25',
    metrics: ['R² = 0.91'],
    features: [
      'Sales forecasting using historical data',
      'Seasonality and trend analysis',
      'Feature engineering for sales drivers',
      'Interactive sales visualizations',
      'Business insights generation',
    ],
    techStack: ['linear-regression', 'Scikit-learn', 'Plotly', 'Seaborn'],
    githubUrl: 'https://github.com/Ali-Ashraf-510/advertising-sales-prediction',
    demoUrl: '#',
  },
  {
    id: 4,
    title: 'Insurance Charges Predictor',
    image: "src/assets/Projects/LR/insurance-charge-predictor.png", // Replace with actual image
    description: 'Linear regression model for predicting insurance charges based on various factors such as age, BMI, and smoking status.',
    status: 'Completed',
    category: 'regression',
    mlType: 'supervised-learning',
    algorithm: 'Linear Regression',
    date: '2025-09-25',
    metrics: ['74% Accuracy'],
    features: [
      'Predicts insurance charges from health/lifestyle data',
      'Feature selection for key predictors',
      'Model evaluation and accuracy reporting',
      'Data preprocessing pipeline',
      'Supports multiple input variables',
    ],
    techStack: ['linear-regression', 'Scikit-learn', 'Plotly', 'Seaborn'],
    githubUrl: 'https://github.com/Ali-Ashraf-510/insurance-charge-predictor',
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