// src/components/Navbar.jsx
import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const linkRefs = useRef({});
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/certificates', label: 'Certificates' },
    { to: '/contact', label: 'Contact' },
  ];

  const updatePill = () => {
    const container = containerRef.current;
    if (!container) return;

    // measure inside rAF to ensure layout stability
    requestAnimationFrame(() => {
      const activeEl =
        container.querySelector('.nav-link.active') ||
        container.querySelector('.nav-link[aria-current="page"]');

      if (activeEl) {
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        setPill({
          left: Math.round(activeRect.left - containerRect.left),
          width: Math.round(activeRect.width),
          opacity: 1,
        });
      } else {
        setPill((p) => ({ ...p, opacity: 0 }));
      }
    });
  };

  useLayoutEffect(() => {
    updatePill();
    const ro = new ResizeObserver(updatePill);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, isOpen]);

  useEffect(() => {
    const handleResize = () => updatePill();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    requestAnimationFrame(updatePill);
  }, [location.pathname]);

  // click outside to close mobile menu
  useEffect(() => {
    if (!isOpen) return;
    const onDoc = (e) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target) &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', onDoc);
    return () => document.removeEventListener('pointerdown', onDoc);
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`} ref={containerRef} role="navigation" aria-label="Main navigation">
        <div id="nav-links" ref={wrapperRef} className="nav-links-wrapper">
          <div
            className="active-pill"
            style={{
              left: `${pill.left}px`,
              width: `${pill.width}px`,
              opacity: pill.opacity,
            }}
          />

          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              ref={(el) => { if (el) linkRefs.current[label] = el; }}
            >
              <span className="nav-link-text">{label}</span>
              <div className="nav-link-glow" />
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav" role="navigation" aria-label="Mobile navigation">
        {links.map(({ to, label }) => {
          const icons = {
            'Home': 'fas fa-home',
            'About': 'fas fa-user',
            'Projects': 'fas fa-code',
            'Certificates': 'fas fa-certificate',
            'Contact': 'fas fa-envelope'
          };
          
          return (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `mobile-nav-item${isActive ? ' active' : ''}`}
            >
              <i className={icons[label]} aria-hidden="true"></i>
              <span>{label}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;