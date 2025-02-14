// import React, { useState } from 'react';
// import { send } from 'emailjs-com';
// import './Contact.css';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//      axios.post('https://javamailsender-production.up.railway.app/send-email',formData).then((res)=>{console.log(res)});
//       setResponseMessage('Message sent successfully!');
//     } catch (error) {
//       setResponseMessage('Error sending message. Please try again later.');
//     }
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-container">
//         <h1 className="contact-title">Contact Me</h1>
//         <p className="contact-subtitle">I’d love to hear from you! Please fill out the form below to get in touch.</p>
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Your Name"
//               name="name"
//               className="contact-input"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Your Email"
//               name="email"
//               className="contact-input"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <textarea
//               placeholder="Your Message"
//               name="message"
//               className="contact-textarea"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="contact-button">Send Message</button>
//         </form>
//         {responseMessage && <p>{responseMessage}</p>}
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from 'react'
import './Contact.css'
function ContactPage() {
  return (
    <div>
       <div className="help-container">
        <h2 className="help-heading">HAVE A QUESTION? HERE TO HELP</h2>
        <p className="help-description">
        I’d love to hear from you! 
        </p>
        <div className='help-content'>
        <div className="help-contact-options">
          <div className="help-contact-card">
            <h3 className="help-card-title">Contact Me Through Mail</h3>
            <p className="help-card-info">kvasubabu212@gmail.com</p>
          </div>
          <div className="help-contact-card">
            <h3 className="help-card-title">Contact Me Through Mobile</h3>
            <p className="help-card-info">+91 8074266336</p>
          </div>

        </div>
        <div className="customer-image">
            <img 
              className="customer-support " 
              src="https://img.freepik.com/premium-vector/customer-operator-online-technical-support-concept_1198-830.jpg?semt=ais_hybrid " 
              alt="Customer Support" 
              width={500} height={320}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
