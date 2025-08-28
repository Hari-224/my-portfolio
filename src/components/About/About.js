import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import './About.css';

const responses = {
  internship: "I completed my internship at TechCorp...",
  freelancing: "I've worked on 15+ freelance projects...",
  achievements: "🏆 Won 2nd place in National Coding Championship\n...",
  education: "I'm currently pursuing Computer Science Engineering...",
  passion: "I love solving complex problems through code!"
};

const getTopicQuestion = (topic) => {
  const questions = {
    internship: "Tell me about your internship experience",
    freelancing: "What freelance projects have you worked on?",
    achievements: "What are your key achievements?",
    education: "Tell me about your educational background",
    passion: "What drives your passion for development?"
  };
  return questions[topic];
};

const About = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm a passionate Full-Stack Developer. What would you like to know about me?", sender: 'bot' }
  ]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    if (selectedTopic === topic) return;
    setSelectedTopic(topic);
    setMessages(prev => [
      ...prev,
      { text: getTopicQuestion(topic), sender: 'user' },
      { text: responses[topic], sender: 'bot' }
    ]);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        <h2>Get to Know Me - Interactive Chat</h2>
        <div className="about-chat">
          <div className="about-chat-header">
            <MessageCircle size={24} />
            <span>Chat with Me</span>
            <div className="about-chat-online">
              <div className="dot"></div>
              <span>Online</span>
            </div>
          </div>
          <div className="about-chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`about-chat-msg ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="about-chat-replies">
            <p>Quick topics to explore:</p>
            <div className="about-chat-reply-btns">
              {Object.keys(responses).map(topic => (
                <button
                  key={topic}
                  onClick={() => handleTopicClick(topic)}
                  disabled={selectedTopic === topic}
                  className={selectedTopic === topic ? 'disabled' : ''}
                >
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="about-photo-section">
          <div className="about-photo">JD</div>
          <p>Passionate about creating efficient, scalable solutions and always eager to learn new technologies.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
