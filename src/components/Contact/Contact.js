import React, { useState } from 'react';
import { Send, Mail, MapPin, Calendar, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Let's Work Together</h2>
      <div className="contact-grid">
        <div className="contact-form-container">
          <h3>Send me a message</h3>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <><span className="spinner"/> Sending...</> : <><Send size={20}/> Send Message</>}
            </button>
          </form>
        </div>
        <div className="contact-details">
          <h3>Get in touch</h3>
          <div className="contact-detail">
            <Mail size={24}/> <span>your.email@example.com</span>
          </div>
          <div className="contact-detail">
            <MapPin size={24}/> <span>Your City, Country</span>
          </div>
          <div className="contact-detail">
            <Calendar size={24}/> <span>Open for opportunities</span>
          </div>
          <h4>Connect with me</h4>
          <div className="contact-socials">
            <a href="#"><Github size={24}/></a>
            <a href="#"><Linkedin size={24}/></a>
            <a href="#"><Twitter size={24}/></a>
          </div>
          <div className="contact-response">
            <h4>Quick Response</h4>
            <p>I typically respond within 24 hours. For urgent projects, mention it in your message!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
