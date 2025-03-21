import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="">
        <h2 className="section-title">My Projects</h2>
        <div className="project-list">
          <div className="project-card" style={{width:'350px',}}>
            <h3 className="project-title">RamanaSoft App (E-Learning Domain)</h3>
            <p className="project-description">
              The Ramana Soft application is a comprehensive platform designed to streamline internship registration, exam conduction, and administrative approvals. The system facilitates the entire process from student registration for internships to managing exam schedules and results.
            </p>
            <p className="technologies">Technologies Used: React, Node Js, MySQL</p>
         
            <a href="https://ramanasoft.com" target="_blank" rel="noopener noreferrer" className="view-btn">
              View Project
            </a>
          </div>
          <div className="project-card" style={{width:'350px',}}>
            <h3 className="project-title">Insurance App (Insurance Domain)</h3>
            <p className="project-description">
            The Property & Vehicle Insurance Management module digitizes the management of property and vehicle insurance policies. It handles various products, including home, commercial, and vehicle insurance, supporting policyholder data, claims processing, payment histories, and detailed queries by date, month, or year.
            </p>
            <p className="technologies">Technologies Used: ReactJS, Spring Boot, MySQL</p>
            <a href="https://github.com/VASUBABUKATTA/insurance" target="_blank" rel="noopener noreferrer" className="view-btn">
            View Repository
            </a>
          </div>
          <div className="project-card" style={{width:'350px',}}>
            <h3 className="project-title">Employee Management System</h3>
            <p className="project-description">
            The Employee Management System automates manual processes and enables seamless management of employee data through CRUD operations. It supports functionalities such as creating, updating, retrieving, and deleting employee records, ensuring efficient data handling and improved system functionality.  </p>
            <p className="technologies">Technologies Used: ReactJS, Spring Boot, MySQL</p>
            <a href="https://github.com/VASUBABUKATTA/EmployeeManagementApplication" target="_blank" rel="noopener noreferrer" className="view-btn">
              View Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
