import React from 'react';
import Card from '../../ui/Card';

const ProjectCard = ({ project }) => {
  const { title, description, category, tech, features, impact } = project;

  return (
    <Card className="project-card hover-lift">
      <div className="project-gradient" />

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <span className="project-category">{category}</span>
          {title.includes('Suguna Groups') && (
            <span className="internship-badge">Internship Project 🌟</span>
          )}
        </div>

        <p className="project-description">{description}</p>

        <div className="project-section">
          <h4 className="project-section-title">Key Features:</h4>
          <p className="feature-text">{features.join(', ')}</p>
        </div>

        <div className="project-section">
          <h4 className="project-section-title">Impact:</h4>
          <p className="impact-text">{impact}</p>
        </div>

        <div className="project-section">
          <h4 className="project-section-title">Tech Stack:</h4>
          <p className="tech-text">{tech.join(', ')}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
