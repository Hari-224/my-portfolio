import React from 'react';

const SkillItem = ({ name, icon, level }) => {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <div className="skill-name">
          <span className="skill-icon">{icon}</span>
          {name}
        </div>
        <span className="skill-level">{level}%</span>
      </div>
      
      <div className="skill-progress-bar">
        <div 
          className="skill-progress-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillItem;