import React from "react";
import Skills from "./Skills";
import './AboutPage.css';

const About = () => {
  return (
    <div className="about-container mx-auto p-8">
      
      <h6 className="title text-center text-xl text-gray-600 mb-8 ">Full Stack Developer | Java | React | Spring Boot</h6>

      <div className="text-content text-lg text-gray-800 text-align-center">
        <p className="mb-4">
          Hello! I'm Vasubabbu Katta, a passionate Full Stack Developer with a strong foundation in Electronics and Communication Engineering (B.Tech). Over the years, I have honed my skills in software development, primarily working with Java, ReactJS, and Spring Boot to build scalable and efficient applications.
        </p>
        <p className="mb-4">
          My journey into the world of programming started during my undergraduate studies, where I developed a keen interest in coding and problem-solving. As I transitioned into full-stack development, I focused on mastering both frontend and backend technologies to create end-to-end solutions. I believe in building clean, maintainable code that solves real-world problems and provides a seamless user experience.
        </p>
        <p className="mb-4">
          I’m also passionate about Agile methodologies, and I am well-versed in Scrum frameworks, which help streamline the development process and ensure high-quality results. By embracing agile practices, I ensure that I am continuously improving my skills and delivering value to my clients in every iteration.
        </p>
        <p className="mb-8">
          As a lifelong learner, I am always exploring new technologies and frameworks to keep up with the ever-evolving software development landscape. Whether it's contributing to open-source projects, collaborating in teams, or learning new concepts, I am always eager to grow and improve. My goal is to work on impactful projects that challenge my skills while making a meaningful difference.
        </p>
      </div>

      <Skills />
    </div>
  );
};

export default About;
