import React from "react";
import Projects from "./Projects";
const Portfolio =()=>{
    return(
<div className="container mx-auto p-8">
     
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Projects />
       
      </div>
    </div>
    )
}
export default Portfolio;