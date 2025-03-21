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
            <h3>Jdbc</h3>
            <div className="skill-bar jdbc"></div>
          </div>
          <div className="skill-item">
            <h3>Spring Boot</h3>
            <div className="skill-bar spring-boot"></div>
          </div>
          <div className="skill-item">
            <h3>Html</h3>
            <div className="skill-bar html"></div>
          </div>
          <div className="skill-item">
            <h3>Css</h3>
            <div className="skill-bar css"></div>
          </div>
          <div className="skill-item">
            <h3>Bootstrap</h3>
            <div className="skill-bar bootstrap"></div>
          </div>
          <div className="skill-item">
            <h3>Javascript</h3>
            <div className="skill-bar javascript"></div>
          </div>
          <div className="skill-item">
            <h3>ReactJS</h3>
            <div className="skill-bar react"></div>
          </div>
          <div className="skill-item">
            <h3>Git/GitHub</h3>
            <div className="skill-bar git"></div>
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
