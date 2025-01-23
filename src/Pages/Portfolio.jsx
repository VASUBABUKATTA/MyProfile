import React from "react";
import Projects from "./Projects";
const Portfolio =()=>{
    return(
<div className="container mx-auto p-8">
      {/* <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      <p className="text-lg">Here are some of my recent projects:</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Projects />
        {/* Add your project details here */}
        {/* <div className="border p-4 shadow">Project 1</div>
        <div className="border p-4 shadow">Project 2</div>
        <div className="border p-4 shadow">Project 3</div> */}
      </div>
    </div>
    )
}
export default Portfolio;