// import React from 'react';
// import ContactForm from './ContactForm';
// import ContactInfo from './ContactInfo';
// import { useFormSubmission } from '../../../hooks/useFormSubmission';
// import './Contact.css';

// const Contact = () => {
//   const formSubmission = useFormSubmission();

//   return (
//     <section id="contact" className="section">
//       <div className="container">
//         <h2 className="section-title">Let's Build Something Amazing</h2>
//         <p className="section-subtitle">
//           Ready to bring your ideas to life? Let's connect and make it happen!
//         </p>
        
//         <div className="contact-grid">
//           <ContactForm {...formSubmission} />
//           <ContactInfo />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { useFormSubmission } from '../../../hooks/useFormSubmission';
import './Contact.css';

const Contact = () => {
  const formSubmission = useFormSubmission();

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">🚀 Let's Build Something Epic</h2>
        <p className="section-subtitle">
          Share your vision step by step — together, we’ll make it real. ✨
        </p>
        
        <div className="contact-grid">
          <ContactForm {...formSubmission} />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
