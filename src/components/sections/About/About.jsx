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
              I'm a dedicated <strong className="highlight">Computer Science Engineering</strong> student
              at Sri Krishna College of Technology, graduating in 2027. My passion lies in transforming
              real-world problems into <strong className="highlight-green">efficient digital solutions </strong> 
              through clean, scalable engineering.
            </p>

            <p className="about-paragraph">
              I focus on building high-performance
              <strong className="highlight-blue"> web</strong> and
              <strong className="highlight-green"> mobile applications</strong> using 
              modern technologies such as <strong className="highlight-blue">React, Flutter, and Spring Boot </strong>
              backed by robust <strong className="highlight-green">MySQL</strong> databases.
              I also design intuitive user interfaces with 
              <strong className="highlight-yellow"> Figma</strong>.
            </p>

            <p className="about-paragraph">
  I build reliable, production-ready software with clean, maintainable code and intuitive UI/UX. Driven by curiosity and creativity, I thrive in collaborative, high-performing teams, focusing on delivering products that create measurable value and exceptional user experiences.
</p>



            <div className="about-actions">
              <Button
                variant="secondary"
                icon={<FaDownload />}
                onClick={() => window.open('/Hariprasath_A_resume.pdf', '_blank')}
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
