import React from 'react';

const SkillCard = ({ icon, title, description, tags, isPurple = false }) => {
  return (
    <div className="card skill-card">
      <div className={`skill-icon-wrapper ${isPurple ? 'purple' : ''}`}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="skill-badges">
        {tags.map((tag, idx) => (
          <span key={idx} className="skill-badge">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
