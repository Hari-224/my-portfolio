import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaRocket, FaStar } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import Button from '../../ui/Button';
import { scrollToSection } from '../../../utils/scrollToSection';
import './Hero.css';

const stats = [
  { icon: <FaCode />, label: '9+ Technologies' },
  { icon: <FaRocket />, label: '4+ Projects' },
  { icon: <FaStar />, label: '99% Client Satisfaction' }
];

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/Hari-224', hoverColor: '#6b7280' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/hariprasath-a-ba72a3299/', hoverColor: '#3b82f6' },
  { icon: <SiLeetcode />, url: 'https://leetcode.com/u/Hari-224/', hoverColor: '#f59e0b' }
];

const HeroStats = () => (
  <div className="hero-stats">
    {stats.map((stat, index) => (
      <span key={index} className="stat-item hover-lift">
        {stat.icon}
        {stat.label}
      </span>
    ))}
  </div>
);

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content fade-in-up">
        <h1 className="hero-title hero-typewriter">
          <Typewriter
            options={{
              strings: ['Full Stack Developer', 'Problem Solver'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              pauseFor: 2000,
            }}
          />
        </h1>

        <p className="hero-subtitle">
          Transforming ideas into digital reality
        </p>

        <HeroStats />

        <div className="hero-buttons">
          <Button
            variant="secondary"
            onClick={() => scrollToSection('projects')}
            className="no-hover"
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToSection('contact')}
            className="no-hover"
          >
            Get In Touch
          </Button>
        </div>

        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link hover-scale hover-rotate"
              style={{ '--hover-color': social.hoverColor }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
