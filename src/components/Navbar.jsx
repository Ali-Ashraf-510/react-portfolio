// src/components/Navbar.jsx
import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  const linkRefs = useRef({});
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
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

    // Find the currently active link element (NavLink adds 'active' class)
    const activeEl = Object.values(linkRefs.current).find((el) => el && el.classList.contains('active'));
    if (activeEl) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      setPill({
        left: Math.round(activeRect.left - containerRect.left),
        width: Math.round(activeRect.width),
        opacity: 1,
      });
    } else {
      // Hide pill if nothing active
      setPill((p) => ({ ...p, opacity: 0 }));
    }
  };

  useLayoutEffect(() => {
    // Update pill position after DOM updates (route change)
    updatePill();
    // also ensure pill updates if fonts/images cause layout shifts
    const stableObserver = new ResizeObserver(updatePill);
    if (containerRef.current) stableObserver.observe(containerRef.current);
    return () => stableObserver.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    // Update on window resize
    const handleResize = () => updatePill();
    window.addEventListener('resize', handleResize);

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`} ref={containerRef}>
      <div className="nav-links-wrapper">
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
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            ref={(el) => { if (el) linkRefs.current[label] = el; }}
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