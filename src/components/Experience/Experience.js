import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './Experience.css';

const timeline = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    description: "Leading a team of developers...",
    achievements: ["Increased system performance by 40%", "Led migration to microservices"]
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    description: "Developed MVP from scratch...",
    achievements: ["Built app for 10k+ users", "Reduced deployment time by 60%"]
  },
  {
    year: "2022",
    title: "Junior Developer",
    company: "WebDev Agency",
    description: "Focused on frontend dev...",
    achievements: ["Completed 15+ client projects", "Mastered React and TypeScript"]
  }
];

const badges = [
  { name: "Algorithm Master", icon: "🧠", progress: 85 },
  { name: "Code Quality Expert", icon: "⚡", progress: 92 },
  { name: "Team Player", icon: "🤝", progress: 88 },
  { name: "Innovation Driver", icon: "🚀", progress: 90 }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0 });

  useEffect(() => {
    const target = { projects: 25, clients: 15, experience: 2 };
    const steps = 50;
    const timer = setInterval(() => {
      setCounters(prev => ({
        projects: Math.min(prev.projects + Math.ceil(target.projects / steps), target.projects),
        clients: Math.min(prev.clients + Math.ceil(target.clients / steps), target.clients),
        experience: Math.min(prev.experience + Math.ceil(target.experience / steps), target.experience)
      }));
    }, 40);
    setTimeout(() => clearInterval(timer), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <h2>Experience & Achievements</h2>
      </div>
      <div className="experience-counters">
        <div><span className="counter blue">{counters.projects}+</span> Projects Completed</div>
        <div><span className="counter green">{counters.clients}+</span> Happy Clients</div>
        <div><span className="counter purple">{counters.experience}+</span> Years Experience</div>
      </div>
      <div className="experience-tabs">
        <button className={activeTab === 'timeline' ? 'active' : ''} onClick={() => setActiveTab('timeline')}>Timeline</button>
        <button className={activeTab === 'achievements' ? 'active' : ''} onClick={() => setActiveTab('achievements')}>Achievements</button>
      </div>
      {activeTab === 'timeline' && (
        <div className="experience-timeline">
          {timeline.map((item, i) => (
            <div key={i} className={`timeline-row ${i % 2 === 0 ? '' : 'reverse'}`}>
              <div className="timeline-card">
                <div className="timeline-year">{item.year}</div>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-desc">{item.description}</p>
                <ul>
                  {item.achievements.map((ach, j) => (
                    <li key={j}><Star size={12} className="star" />{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'achievements' && (
        <div className="experience-badges">
          {badges.map((badge, i) => (
            <div key={i} className="badge-card">
              <div className="badge-header">
                <span className="badge-icon">{badge.icon}</span>
                <div>
                  <h4>{badge.name}</h4>
                  <p>Progress: {badge.progress}%</p>
                </div>
              </div>
              <div className="badge-progress-bar">
                <div className="badge-progress" style={{ width: `${badge.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Experience;
