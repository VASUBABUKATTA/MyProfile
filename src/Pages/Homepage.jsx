import React from "react";
import './Home.css';
import profilepic from '../Assets/vasubabu.jpg';

const Homepage = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <h1 className="home-title">Welcome to My Profile</h1>
        <div className="profile-content">
          <div className="profile-image">
            <img src={profilepic} alt="Vasubabu Katta" className="image" />
          </div>
          <div className="profile-description">
            <p className="home-description">
              Hello, I'm <strong>Vasubabu Katta</strong>, a dedicated and skilled freelancer specializing in building robust and scalable <strong>Spring Boot Microservices</strong> and dynamic, responsive user interfaces using <strong>React.js</strong> and <strong>Java</strong>. 
            </p>
            <p className="home-description">
              With a passion for clean code and efficient solutions, I bring a results-driven approach to each project. Whether you're looking for high-performance backend systems or interactive front-end experiences, I'm here to help you turn your ideas into reality. 
            </p>
            <p className="home-description">
              Explore my portfolio, learn more about the services I offer, and feel free to reach out to discuss how we can collaborate on your next project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
