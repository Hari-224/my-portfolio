import React from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import AchievementCard from './AchievementCard';
import Button from '../../ui/Button';
import { achievements } from '../../../data/achievements';
import { scrollToSection } from '../../../utils/scrollToSection';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="about-paragraph">
  I am currently pursuing <strong className="highlight">B.E. Computer Science</strong> at 
  Sri Krishna College of Technology (SKCT), graduating in 2027. I specialize in building 
  scalable web and mobile applications.
</p>

<p className="about-paragraph">
  My expertise spans <strong className="highlight-blue">Full Stack Development</strong>, 
  <strong className="highlight-green"> Flutter Development</strong>, and <strong className="highlight-yellow">UI/UX Design with Figma</strong>. 
  I create user-focused, high-performance applications.
</p>

<p className="about-paragraph">
  I have solved <strong className="highlight-red">200+ coding problems on LeetCode</strong> 
  and work as a freelance developer, delivering projects for clients with clean, efficient solutions.
</p>

            
            <div className="about-actions">
              <Button
                variant="secondary"
                icon={<FaDownload />}
                onClick={() => window.open('/Hariprasath_resume_dot.pdf', '_blank')}
                className="no-hover"
              >
                Download Resume
              </Button>
              
              <Button
                variant="secondary"
                icon={<FaEnvelope />}
                onClick={() => scrollToSection('contact')}
                className="no-hover"
              >
                Contact Me
              </Button>
            </div>
          </div>  

          <div className="achievements-section">
            {/* <h3 className="achievements-title">Achievements & Milestones</h3> */}
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  icon={achievement.icon}
                  title={achievement.title}
                  description={achievement.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
