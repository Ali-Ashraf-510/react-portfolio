// src/components/SkillsChart.jsx
import React, { useState, useEffect, useRef } from 'react';

/**
 * SkillsChart Component
 * Interactive animated skills chart with progress bars
 * 
 * @param {Array} skills - Array of skill objects with name, level, and color
 * @param {string} className - Additional CSS classes
 */
const SkillsChart = ({ 
  skills = [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'CSS3', level: 88, color: '#1572B6' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'Python', level: 80, color: '#3776AB' },
    { name: 'Machine Learning', level: 75, color: '#FF6B6B' }
  ],
  className = ''
}) => {
  const [animatedSkills, setAnimatedSkills] = useState(
    skills.map(skill => ({ ...skill, animatedLevel: 0 }))
  );
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with staggered delay
          animatedSkills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => 
                prev.map((s, i) => 
                  i === index ? { ...s, animatedLevel: s.level } : s
                )
              );
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, [animatedSkills]);

  return (
    <div ref={chartRef} className={`skills-chart ${className}`}>
      <h3 className="skills-title">Technical Skills</h3>
      <div className="skills-container">
        {animatedSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.animatedLevel}%</span>
            </div>
            <div className="skill-bar-container">
              <div 
                className="skill-bar"
                style={{
                  width: `${skill.animatedLevel}%`,
                  backgroundColor: skill.color,
                  transition: 'width 1.5s ease-in-out'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsChart;
