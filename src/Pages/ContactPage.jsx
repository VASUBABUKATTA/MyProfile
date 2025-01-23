import React, { useState } from 'react';
import { send } from 'emailjs-com';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     axios.post('http://localhost:9090/send-email',formData).then((res)=>{console.log(res)});
      setResponseMessage('Message sent successfully!');
    } catch (error) {
      setResponseMessage('Error sending message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">I’d love to hear from you! Please fill out the form below to get in touch.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              name="message"
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
