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
    <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`} ref={containerRef} role="navigation" aria-label="Main navigation">
      <button
        className="nav-toggle"
        aria-controls="nav-links"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => {
          setIsOpen((v) => !v);
          requestAnimationFrame(updatePill);
        }}
      >
        <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        <span className={`hamburger ${isOpen ? 'open' : ''}`} aria-hidden="true" />
      </button>

      <div id="nav-links" ref={wrapperRef} className={`nav-links-wrapper ${isOpen ? 'open' : 'collapsed'}`}>
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
            onClick={() => {
              setIsOpen(false);
              requestAnimationFrame(updatePill);
            }}
          >
            <span className="nav-link-text">{label}</span>
            <div className="nav-link-glow" />
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;