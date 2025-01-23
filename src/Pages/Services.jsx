import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <div className="service-list">
          <div className="service-card">
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              I specialize in creating modern, responsive websites that are fast, accessible, and scalable. Whether it's a simple landing page or a complex web application, I can help you bring your vision to life.
            </p>
          </div>
          {/* <div className="service-card">
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              I focus on creating intuitive, user-friendly interfaces that provide an excellent user experience. From wireframing to prototyping, I design interfaces that delight users while achieving your business goals.
            </p>
          </div> */}
           <div className="service-card">
            <h3 className="service-title">Backend Development</h3>
            <p className="service-description">
              I specialize in building robust, secure, and scalable backend systems. I can create and manage CRUD APIs, integrate third-party services, and ensure that your application handles data efficiently with proper validation and security measures, including JWT authentication.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-title">API Integration</h3>
            <p className="service-description">
              I integrate third-party APIs to extend the functionality of your application, ensuring seamless data flow and improved performance. From payment gateways to social media APIs, I've got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
