import React from 'react';

const AchievementCard = ({ icon, title, description }) => {
  return (
    <div className="achievement-card glass-card hover-lift">
      <div className="achievement-icon">{icon}</div>
      <h4 className="achievement-title">{title}</h4>
      <p className="achievement-description">{description}</p>
    </div>
  );
};

export default AchievementCard;