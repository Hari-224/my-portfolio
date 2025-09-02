import React from 'react';
import SkillCategory from './SkillCategory';
import { skillCategories } from '../../../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Mastering cutting-edge technologies to build tomorrow's solutions
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              category={category.category}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;