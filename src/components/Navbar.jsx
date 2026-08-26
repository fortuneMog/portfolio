import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Database, Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo">
          <div className="logo-badge">
            <Database size={20} />
          </div>
          <span className="logo-text">Fortune Mogoeng <span className="logo-accent">.</span></span>
        </NavLink>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>Overview</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/resume" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>Experience</NavLink>
          <NavLink to="/certifications" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>Certifications</NavLink>
          
          <div className="nav-socials">
            <button onClick={toggleTheme} className="social-icon" style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0', display: 'flex', color: 'inherit' }} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="https://github.com/fortuneMog" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/fortunemogoeng/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
