import React, { useState } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const PROJECT_TYPES = ['Web App', 'Mobile App', 'Branding', 'Other'];

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectTypes: [],
    details: ''
  });
  const [popupMessage, setPopupMessage] = useState('');

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleProjectType = (type) => {
    setFormData(prev => {
      const newTypes = prev.projectTypes.includes(type)
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type];
      return { ...prev, projectTypes: newTypes };
    });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const nextStep = () => {
    if (step === 1 && formData.name.trim() === '') {
      showPopup('Please enter your name!');
      return;
    }
    if (step === 2 && !validateEmail(formData.email)) {
      showPopup('Please enter a valid email!');
      return;
    }
    if (step === 3 && formData.projectTypes.length === 0) {
      showPopup('Select at least one project type!');
      return;
    }
    setStep(step + 1);
  };

  const showPopup = (msg) => {
    setPopupMessage(msg);
    setTimeout(() => setPopupMessage(''), 2000);
  };

  const handleLaunch = () => {
    if (formData.details.trim().length < 10) {
      showPopup('Please enter at least 10 characters in the project details!');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_types: formData.projectTypes.join(', '),
      message: formData.details,
      to_email: 'akhariakhari7@gmail.com'
    };

    emailjs.send(
      'service_mail_hari',
      'template_w4w91wm',
      templateParams,
      'EG14A6bdfYuJ9vxrS'
    ).then(() => {
      showPopup('🎉 Your idea has been received! I’ll review it and get back to you soon.');
      setStep(1);
      setFormData({ name: '', email: '', projectTypes: [], details: '' });
    }, (error) => {
      showPopup('❌ Failed to send message. Try again.');
      console.error(error);
    });
  };

  return (
    <div className="contact-form-container glass-card">
      <h3 className="contact-form-title">Send Message</h3>

      {popupMessage && <div className="popup-message">{popupMessage}</div>}

      <div className="form-step">
        {step === 1 && (
          <>
            <Input
              label="Name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
            />
            <div className="button-center">
              <Button className="next-btn" onClick={nextStep}>Next</Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <Input
              label="Email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
            />
            <div className="button-center">
              <Button className="next-btn" onClick={nextStep}>Next</Button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label>Select Project Type</label>
            <div className="project-type-buttons">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={formData.projectTypes.includes(type) ? 'selected' : ''}
                  onClick={() => toggleProjectType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="button-center">
              <Button className="next-btn" onClick={nextStep}>Next</Button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <label>Share Project Details</label>
            <textarea
              className="form-textarea"
              placeholder="Describe your project, ideas, or requirements..."
              value={formData.details}
              onChange={(e) => updateFormData('details', e.target.value)}
              rows="5"
            />
            <div className="button-center">
              <Button className="launch-btn" onClick={handleLaunch}>Launch</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
