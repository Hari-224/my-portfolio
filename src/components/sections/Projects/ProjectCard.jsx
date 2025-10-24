
import React from 'react';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../../ui/Card';

const ProjectCard = ({ project }) => {
  const { title, description, category, tech, features, impact} = project;

  return (
    <Card className="project-card hover-lift">
      <div className="project-gradient" />

      <div className="project-content">
        {/* Header */}
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <span className="project-category">{category}</span>
          {title.includes('Suguna Groups') && (
    <span className="internship-badge">Internship Project 🌟</span>
  )}
        </div>

        {/* Description */}
        <p className="project-description">{description}</p>

        {/* Features */}
        <div className="project-section">
          <h4 className="project-section-title">Key Features:</h4>
          <div className="feature-tags">
            {features.map((feature, i) => (
              <span key={i} className="feature-tag">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="project-section">
          <h4 className="project-section-title">Impact:</h4>
          <p className="impact-text">{impact}</p>
        </div>

        {/* Tech Stack */}
        <div className="project-section">
          <h4 className="project-section-title">Tech Stack:</h4>
          <div className="tech-tags">
            {tech.map((technology, i) => (
              <span key={i} className="tech-tag">
                {technology}
              </span>
            ))}
          </div>
        </div>
            
      </div>
    </Card>
  );
};

export default ProjectCard;
