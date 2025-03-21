import React from "react";
import Skills from "./Skills";
import './AboutPage.css';

const About = () => {
  return (
    <div className="about-container mx-auto max-w-4xl p-10 bg-white shadow-lg rounded-lg">
      
      <h6 className="title text-center text-2xl font-semibold text-gray-700 mb-6">
        Full Stack Developer | Java | React | Spring Boot
      </h6>

      <div className="text-content text-lg text-gray-700 leading-relaxed mt-2" style={{marginTop:'10px'}}>
        <p className="mb-4">
          Hello! I'm <span className="font-bold text-gray-900">Vasubabu Katta</span>, a passionate Full Stack Developer with a strong foundation in 
          Electronics and Communication Engineering (B.Tech). I specialize in developing scalable and efficient applications using 
          <span className="text-blue-500 font-semibold"> Java, ReactJS, and Spring Boot</span>.
        </p>
        <p className="mb-4" style={{marginTop:'10px'}}>
          My journey into programming started during my undergraduate studies, where I discovered my love for coding and problem-solving. 
          As I transitioned into full-stack development, I honed my skills in both frontend and backend technologies to create seamless, end-to-end solutions.
        </p>
        <p className="mb-4" style={{marginTop:'10px'}}>
          I embrace <span className="text-blue-500 font-semibold">Agile methodologies</span> and Scrum frameworks, ensuring that I deliver high-quality software solutions 
          efficiently. By following best practices, I focus on writing <span className="font-semibold">clean, maintainable code</span> that enhances user experience.
        </p>
        <p className="mb-6" style={{marginTop:'10px'}}>
          As a <span className="font-semibold">lifelong learner</span>, I am constantly exploring new technologies to stay ahead in the ever-evolving tech industry. 
          Whether it's contributing to open-source projects, collaborating in teams, or building innovative applications, I strive to grow every day.
        </p>
      </div>

      {/* <div className="text-center mt-6">
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div> */}

      <div className="mt-10" >
        <Skills />
      </div>
    </div>
  );
};

export default About;
