import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../../data/constants';
import './ContactInfo.css';

const ContactInfo = () => {
  const contactMethods = [
    { icon: <FaEnvelope />, title: "Email", value: "akhariakhari7@gmail.com", link: SOCIAL_LINKS.email },
    { icon: <FaLinkedin />, title: "LinkedIn", value: "Connect with me", link: SOCIAL_LINKS.linkedin },
    { icon: <FaGithub />, title: "GitHub", value: "View my repositories", link: SOCIAL_LINKS.github },
    { icon: <FaCode />, title: "LeetCode", value: "Solve challenges with me", link: "https://leetcode.com/u/Hari-224/" },
  ];

  return (
    <div className="contact-info upgraded-contact">
      {/* Intro */}
      <div className="contact-intro">
        <h3 className="contact-info-title">Get In Touch</h3>
        <p className="contact-info-description">
       🚀 Turning ideas into impact - let’s build solutions that last.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="contact-methods">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            target={method.link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="contact-method hover-effect"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="contact-method-icon">{method.icon}</div>
            <div className="contact-method-content">
              <h4 className="contact-method-title">{method.title}</h4>
              <p className="contact-method-value">{method.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Status Indicator */}
      <div className="status-indicator">
        <div className="status-dot"></div>
        <div className="status-content">
          <span className="status-text">✅ Available for opportunities</span>
          <p className="status-description">Exploring internships & junior developer roles</p>
        </div>
      </div>

      {/* Fun Fact */}
      {/* <div className="fun-fact">
        <p>⚡ Fun Fact: I once built a project overnight fueled only by coffee ☕</p>
      </div> */}
    </div>
  );
};

export default ContactInfo;
