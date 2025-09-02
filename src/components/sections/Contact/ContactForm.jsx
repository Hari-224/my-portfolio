// import React from 'react';
// import Button from '../../ui/Button';
// import Input from '../../ui/Input';

// const ContactForm = ({ 
//   formData, 
//   isSubmitting, 
//   submitStatus, 
//   handleSubmit, 
//   updateFormData 
// }) => {
//   return (
//     <div className="contact-form-container glass-card">
//       <h3 className="contact-form-title">Send Message</h3>
      
//       <form onSubmit={handleSubmit} className="contact-form">
//         <div className="form-group">
//           <Input
//             label="Name"
//             type="text"
//             placeholder="Your full name"
//             value={formData.name}
//             onChange={(e) => updateFormData('name', e.target.value)}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <Input
//             label="Email"
//             type="email"
//             placeholder="your.email@example.com"
//             value={formData.email}
//             onChange={(e) => updateFormData('email', e.target.value)}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label className="form-label">Message</label>
//           <textarea
//             className="form-textarea"
//             placeholder="Tell me about your project..."
//             value={formData.message}
//             onChange={(e) => updateFormData('message', e.target.value)}
//             required
//             rows="5"
//           />
//         </div>
        
//         <Button
//           type="submit"
//           variant="primary"
//           disabled={isSubmitting}
//           className="submit-button"
//         >
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//         </Button>
        
//         {submitStatus === 'success' && (
//           <p className="success-message">
//             ✓ Message sent successfully! I'll get back to you soon.
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState } from 'react';
// import Button from '../../ui/Button';
// import Input from '../../ui/Input';
// import { motion } from 'framer-motion';
// import Confetti from 'react-confetti';

// const steps = [
//   { key: 'name', label: 'Your Name ✨', placeholder: 'e.g. Alex Johnson' },
//   { key: 'email', label: 'Your Email 📧', placeholder: 'e.g. alex@email.com' },
//   { key: 'projectType', label: 'Project Type 🛠️', options: ['Web App', 'Mobile App', 'Branding', 'Other'] },
//   { key: 'budget', label: 'Budget 💰', type: 'slider', min: 500, max: 5000 },
//   { key: 'message', label: 'Tell me more ✍️', placeholder: 'Share details about your idea...' }
// ];

// const ContactForm = ({ formData, isSubmitting, submitStatus, handleSubmit, updateFormData }) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [showConfetti, setShowConfetti] = useState(false);

//   const step = steps[currentStep];

//   const nextStep = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       handleSubmit({ preventDefault: () => {} });
//       setShowConfetti(true);
//     }
//   };

//   return (
//     <div className="contact-form-container glass-card">
//       <h3 className="contact-form-title">Step {currentStep + 1} of {steps.length}</h3>

//       <motion.div
//         key={step.key}
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -50 }}
//         transition={{ duration: 0.4 }}
//       >
//         {/* Different field types */}
//         {step.type === 'slider' ? (
//           <div>
//             <label>{step.label}</label>
//             <input
//               type="range"
//               min={step.min}
//               max={step.max}
//               value={formData[step.key] || step.min}
//               onChange={(e) => updateFormData(step.key, e.target.value)}
//             />
//             <p>💸 Estimated Budget: ${formData[step.key] || step.min}</p>
//           </div>
//         ) : step.options ? (
//           <div>
//             <label>{step.label}</label>
//             <div className="option-buttons">
//               {step.options.map((option) => (
//                 <Button
//                   key={option}
//                   variant={formData[step.key] === option ? 'primary' : 'secondary'}
//                   onClick={() => updateFormData(step.key, option)}
//                 >
//                   {option}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         ) : step.key === 'message' ? (
//           <textarea
//             className="form-textarea"
//             placeholder={step.placeholder}
//             value={formData.message}
//             onChange={(e) => updateFormData('message', e.target.value)}
//             rows="5"
//           />
//         ) : (
//           <Input
//             label={step.label}
//             type="text"
//             placeholder={step.placeholder}
//             value={formData[step.key]}
//             onChange={(e) => updateFormData(step.key, e.target.value)}
//           />
//         )}
//       </motion.div>

//       {/* Next button */}
//       <Button
//         type="button"
//         variant="primary"
//         onClick={nextStep}
//         disabled={isSubmitting}
//       >
//         {currentStep === steps.length - 1 ? '🎉 Launch!' : '⚡ Next'}
//       </Button>

//       {submitStatus === 'success' && (
//         <p className="success-message">Thanks! I’ll get back soon 🚀</p>
//       )}

//       {showConfetti && <Confetti />}
//     </div>
//   );
// };

// export default ContactForm;

// import React, { useState, useEffect } from 'react';
// import Button from '../../ui/Button';
// import Input from '../../ui/Input';

// const PROJECT_TYPES = ['Web App', 'Mobile App', 'Branding', 'Other'];

// const ContactForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     projectTypes: [],
//     details: ''
//   });
//   const [submitStatus, setSubmitStatus] = useState('');
//   const [popupMessage, setPopupMessage] = useState('');

//   const updateFormData = (key, value) => {
//     setFormData(prev => ({ ...prev, [key]: value }));
//   };

//   const toggleProjectType = (type) => {
//     setFormData(prev => {
//       const newTypes = prev.projectTypes.includes(type)
//         ? prev.projectTypes.filter(t => t !== type)
//         : [...prev.projectTypes, type];
//       return { ...prev, projectTypes: newTypes };
//     });
//   };

//   const validateEmail = (email) => email.includes('@');

//   const nextStep = () => {
//     if (step === 1 && !formData.name) {
//       showPopup('Please enter your name!');
//       return;
//     }
//     if (step === 2 && !validateEmail(formData.email)) {
//       showPopup('Please enter a valid email!');
//       return;
//     }
//     if (step === 3 && formData.projectTypes.length === 0) {
//       showPopup('Select at least one project type!');
//       return;
//     }
//     setStep(step + 1);
//   };

//   const showPopup = (msg) => {
//     setPopupMessage(msg);
//     setTimeout(() => setPopupMessage(''), 5000);
//   };

//   const handleLaunch = () => {
//     if (!formData.details) {
//       showPopup('Please share your project details!');
//       return;
//     }
//     // Simulate sending email
//     setSubmitStatus('sending');
//     setTimeout(() => {
//       setSubmitStatus('success');
//       showPopup('Message sent successfully!');
//       setStep(1);
//       setFormData({ name: '', email: '', projectTypes: [], details: '' });
//     }, 2000);
//   };

//   return (
//     <div className="contact-form-container glass-card">
//       <h3 className="contact-form-title">Send Message</h3>
//       {popupMessage && <div className="popup-message">{popupMessage}</div>}

//       <div className="form-step">
//         {step === 1 && (
//           <>
//             <Input
//               label="Name"
//               type="text"
//               placeholder="Your full name"
//               value={formData.name}
//               onChange={(e) => updateFormData('name', e.target.value)}
//             />
//             <Button className="next-btn" onClick={nextStep}>Next</Button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <Input
//               label="Email"
//               type="email"
//               placeholder="your.email@example.com"
//               value={formData.email}
//               onChange={(e) => updateFormData('email', e.target.value)}
//             />
//             <Button className="next-btn" onClick={nextStep}>Next</Button>
//           </>
//         )}

//         {step === 3 && (
//           <>
//             <label>Select Project Type</label>
//             <div className="project-type-buttons">
//               {PROJECT_TYPES.map((type) => (
//                 <button
//                   key={type}
//                   type="button"
//                   className={formData.projectTypes.includes(type) ? 'selected' : ''}
//                   onClick={() => toggleProjectType(type)}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>
//             <Button className="next-btn" onClick={nextStep}>Next</Button>
//           </>
//         )}

//         {step === 4 && (
//           <>
//             <label>Share Project Details</label>
//             <textarea
//               className="form-textarea"
//               placeholder="Describe your project, ideas, or requirements..."
//               value={formData.details}
//               onChange={(e) => updateFormData('details', e.target.value)}
//               rows="5"
//             />
//             <Button className="launch-btn" onClick={handleLaunch}>Launch</Button>
//           </>
//         )}
//       </div>

//       {submitStatus === 'success' && (
//         <p className="success-message">✓ Message sent successfully!</p>
//       )}
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
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
  const [submitStatus, setSubmitStatus] = useState('');
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

  const validateEmail = (email) => email.includes('@');

  const nextStep = () => {
    if (step === 1 && !formData.name) {
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
    setTimeout(() => setPopupMessage(''), 8000); // Popup for 8 seconds
  };

  const handleLaunch = () => {
    if (!formData.details) {
      showPopup('Please share your project details!');
      return;
    }

    // Simulate sending message
    setSubmitStatus('sending');
    setTimeout(() => {
      setSubmitStatus('success');
      showPopup('✓ Message sent successfully!');
      setStep(1);
      setFormData({ name: '', email: '', projectTypes: [], details: '' });
    }, 2000);
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
              <Button className="next-btn" onClick={nextStep}>
                Next
              </Button>
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
              <Button className="next-btn" onClick={nextStep}>
                Next
              </Button>
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
              <Button className="next-btn" onClick={nextStep}>
                Next
              </Button>
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
              <Button className="launch-btn" onClick={handleLaunch}>
                Launch
              </Button>
            </div>
          </>
        )}
      </div>

      {submitStatus === 'success' && (
        <p className="success-message">✓ Message sent successfully!</p>
      )}
    </div>
  );
};

export default ContactForm;
