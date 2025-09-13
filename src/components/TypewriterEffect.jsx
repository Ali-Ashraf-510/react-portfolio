// src/components/TypewriterEffect.jsx
import React, { useState, useEffect } from 'react';

/**
 * TypewriterEffect Component
 * Creates a typewriter animation effect for text
 * 
 * @param {string[]} words - Array of words to type
 * @param {number} typeSpeed - Speed of typing (ms)
 * @param {number} deleteSpeed - Speed of deleting (ms)
 * @param {number} pauseTime - Pause between words (ms)
 * @param {string} className - Additional CSS classes
 */
const TypewriterEffect = ({ 
  words = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast'], 
  typeSpeed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = ''
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = words[currentWordIndex];
      
      if (isDeleting) {
        // Deleting characters
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing characters
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={`typewriter-text ${className}`}>
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;
