import React from 'react';
import './Internship.css';

const Internship = () => (
  <section id="internship" className="section internship-section">
    <div className="container">
      <h2 className="section-title">Internship Experience</h2>
      <div className="internship-card">
        <h3>Suguna Groups - Chatbot Development Intern</h3>
        <p className="internship-duration">Jan 2025 – Mar 2025</p>
        <p className="internship-description">
          Developed an AI-driven chatbot using <strong>Flutter</strong> and <strong>Spring Boot</strong>
          for supplier and customer query management. Integrated NLP automation to improve
          real-time support efficiency and backend processing.
        </p>
        <ul className="internship-points">
          <li>Built a conversational chatbot UI in Flutter with smooth animations</li>
          <li>Integrated Spring Boot APIs with MySQL for data storage and query resolution</li>
          <li>Enhanced supplier engagement by automating 80% of repetitive queries</li>
          <li>Gained hands-on experience in full-stack and NLP development</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Internship;
