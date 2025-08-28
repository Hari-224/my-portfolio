import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import './CareerGrowthGraph.css';

const milestones = [
  { year: '2022', skill: 20, projects: 2, title: 'Started Journey' },
  { year: '2023', skill: 45, projects: 8, title: 'First Internship' },
  { year: '2024', skill: 70, projects: 15, title: 'Full-Stack Developer' },
  { year: '2025', skill: 85, projects: 25, title: 'Senior Developer' }
];

const CareerGrowthGraph = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="career-growth-section">
      <div className="career-growth-header">
        <button className="career-growth-toggle" onClick={() => setIsVisible(!isVisible)}>
          <TrendingUp size={20} />
          {isVisible ? 'Hide' : 'Show'} Career Growth
        </button>
      </div>
      {isVisible && (
        <div className="career-growth-content">
          <h3>My Development Journey</h3>
          <div className="graph-container">
            {/* SVG graph as per original code, simplified here */}
            <svg className="career-svg" viewBox="0 0 800 200">
              {/* Grid, lines, points, etc. */}
              {/* ...as in original */}
            </svg>
          </div>
          <div className="career-growth-legend">
            <span className="legend-skill">Skill Level</span>
            <span className="legend-projects">Projects Completed</span>
          </div>
          <div className="career-growth-milestones">
            {milestones.map((m, i) => (
              <div key={i} className="milestone">
                <div>{m.year}</div>
                <div>{m.title}</div>
                <div>Skills: {m.skill}%</div>
                <div>Projects: {m.projects}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerGrowthGraph;
