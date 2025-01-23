import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3 className="project-title">PropertyInsurance App (Insurance Domain)</h3>
            <p className="project-description">
              Built a full-stack Property-Insurance app with React, Spring Boot, and MySQL.
              Users can manage policies, claims, and track their insurance status.
            </p>
            <p className="technologies">Technologies Used: React, Spring Boot, MySQL</p>
            <a href="http://183.82.106.55:9093" target="_blank" rel="noopener noreferrer" className="view-btn">
              View Project
            </a>
          </div>
          <div className="project-card">
            <h3 className="project-title">Health-Insurance App (Insurance Domain)</h3>
            <p className="project-description">
              Developed a Health-Insurance App that allows users to sign up, purchase plans, 
              and view insurance details. Integrated with backend services built with Spring Boot.
            </p>
            <p className="technologies">Technologies Used: ReactJS, Spring Boot, MySQL</p>
            <a href="http://183.82.106.55:9101" target="_blank" rel="noopener noreferrer" className="view-btn">
              View Project
            </a>
          </div>
          <div className="project-card">
            <h3 className="project-title">Vehicle-Insurance App (Insurance Domain)</h3>
            <p className="project-description">
              Created a Vehicle-Insurance App for managing vehicle policies, claims, and vehicle details.
              The backend is powered by Spring Boot and OracleDB.
            </p>
            <p className="technologies">Technologies Used: ReactJS, Spring Boot, OracleDB</p>
            <a href="http://183.82.106.55:9101" target="_blank" rel="noopener noreferrer" className="view-btn">
              View Project
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
