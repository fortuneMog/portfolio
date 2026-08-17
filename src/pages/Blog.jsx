import React from 'react';

const Blog = () => {
  return (
    <div className="container page-section">
      <h1 className="page-title">Technical <span className="glow-text">Articles</span></h1>
      <p className="page-subtitle">Thoughts on cloud architectures, data engineering patterns, and modern analytics systems.</p>
      
      <div className="card" style={{ marginTop: '2rem', textAlign: 'center', padding: '3rem' }}>
        <h3>Articles Coming Soon</h3>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Deep dives into building scalable ELT pipelines and cloud data warehousing will be published here.
        </p>
      </div>
    </div>
  );
};

export default Blog;
