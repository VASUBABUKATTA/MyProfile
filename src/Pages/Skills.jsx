import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <h3>Java</h3>
            <div className="skill-bar java"></div>
          </div>
          <div className="skill-item">
            <h3>Spring Boot</h3>
            <div className="skill-bar spring-boot"></div>
          </div>
          <div className="skill-item">
            <h3>ReactJS</h3>
            <div className="skill-bar react"></div>
          </div>
          <div className="skill-item">
            <h3>Agile/Scrum</h3>
            <div className="skill-bar agile"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
