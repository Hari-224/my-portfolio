import React, { useState } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with payment integration and admin dashboard",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    status: "Production"
  },
  {
    id: 2,
    title: "Task Management Mobile App",
    description: "Cross-platform mobile app with real-time synchronization and offline support",
    tech: ["React Native", "Firebase", "Redux"],
    status: "Beta"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Data visualization platform with machine learning insights and predictive analytics",
    tech: ["Python", "React", "TensorFlow", "PostgreSQL"],
    status: "Development"
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description: "Scalable messaging platform with video calls and file sharing capabilities",
    tech: ["Socket.io", "Express", "WebRTC", "Redis"],
    status: "Production"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-card-img">
              <Code size={48} />
            </div>
            <div className="project-card-content">
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <span className={`status ${project.status.toLowerCase()}`}>{project.status}</span>
              </div>
              <p>{project.description}</p>
              <div className="project-card-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              {hoveredProject === project.id && (
                <div className="project-card-actions">
                  <button><ExternalLink size={16} /> Live Demo</button>
                  <button><Github size={16} /> Source Code</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="projects-view-all">
        <button>View All Projects →</button>
      </div>
    </section>
  );
};

export default Projects;
