// src/App.jsx
import React, { useState, useEffect } from 'react';
// Import useLocation to detect route changes
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Import Components and Routes
import Navbar from './components/Navbar';
import CertificateModal from './components/CertificateModal';
import ScrollToTop from './components/ScrollToTop';

import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Certificates from './routes/Certificates';
import Contact from './routes/Contact';

// We need to wrap the Routes to use the useLocation hook
function AppContent() {
  const location = useLocation();
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <Navbar />
      <main>
        {/*
          By adding the location.pathname as a key, we tell React that this
          div is a new component on every route change, re-triggering the
          CSS animation.
        */}
        <div key={location.pathname} className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects openModal={openModal} />} />
            <Route path="/certificates" element={<Certificates openModal={openModal} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      {modalData && <CertificateModal data={modalData} onClose={closeModal} />}
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    document.body.classList.add('theme-transitioning');
    const timer = setTimeout(() => document.body.classList.remove('theme-transitioning'), 300);
    return () => clearTimeout(timer);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <button
        className="theme-toggle"
        onClick={handleToggleTheme}
        aria-label="Toggle between light and dark theme"
        title="Switch Theme"
      >
        <i className={`fas ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`} id="theme-icon" aria-hidden="true"></i>
      </button>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;