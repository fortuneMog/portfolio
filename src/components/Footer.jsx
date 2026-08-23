import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import './Footer.css';

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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-brand">
            <h4>Fortune Mogoeng <span className="glow-red">.</span></h4>
            <p>Senior Cloud Data Engineer & FinTech Architecture Specialist</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} color="var(--accent-cyan)" /> Cape Town, Western Cape, South Africa
            </p>
          </div>

          <div className="footer-links">
            <a href="mailto:fortunemogoeng@gmail.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={16} color="var(--accent-cyan)" /> fortunemogoeng@gmail.com
            </a>
            <a href="https://github.com/fortuneMog" target="_blank" rel="noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <GithubIcon size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/fortunemogoeng/" target="_blank" rel="noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Fortune Mogoeng. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>Built with React, Vite & Dark Obsidian Architecture</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
