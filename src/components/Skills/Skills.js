import React, { useState } from 'react';
import { Globe, Code, Database, Smartphone } from 'lucide-react';
import './Skills.css';

const skillCategories = {
  Frontend: {
    icon: <Globe className="icon" />,
    color: 'frontend-bg',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
    position: { left: '20%', top: '30%' }
  },
  Backend: {
    icon: <Code className="icon" />,
    color: 'backend-bg',
    skills: ['Node.js', 'Python', 'Java', 'Express.js', 'REST APIs'],
    position: { left: '70%', top: '25%' }
  },
  Database: {
    icon: <Database className="icon" />,
    color: 'database-bg',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    position: { left: '25%', top: '70%' }
  },
  Mobile: {
    icon: <Smartphone className="icon" />,
    color: 'mobile-bg',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
    position: { left: '75%', top: '65%' }
  }
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>Skill Map Galaxy</h2>
      </div>
      <div className="skills-galaxy">
        <div className="skills-bg-stars">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="skills-star" />
          ))}
        </div>
        {Object.entries(skillCategories).map(([category, data]) => (
          <div
            key={category}
            className={`skills-node ${data.color}`}
            style={{ left: data.position.left, top: data.position.top }}
          >
            <button onClick={() => setSelectedSkill(selectedSkill === category ? null : category)}>
              {data.icon}
            </button>
            <p>{category}</p>
          </div>
        ))}
        {selectedSkill && (
          <div className="skills-details">
            <h4>{selectedSkill} Technologies</h4>
            <div className="skills-tags">
              {skillCategories[selectedSkill].skills.map((skill, i) => (
                <span key={i} className="skills-tag">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="skills-list">
        {Object.entries(skillCategories).map(([category, data]) => (
          <div key={category} className="skills-category">
            <div className={`skills-icon ${data.color}`}>{data.icon}</div>
            <h4>{category}</h4>
            <p>{data.skills.length} technologies mastered</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
