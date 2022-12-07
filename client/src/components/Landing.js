import React from "react";

export default function Landing() {
  return (
    <>
         <div className="container4">
        <div className="showcase">
        <img src="landing.png" alt=""></img>
        <div className="centered">
          <h2>University Name - Experiential Learning</h2>
          <h4>The Real Meaning of ‘Working Knowledge’</h4>
          <h6>
          University-name is the world leader in experiential learning. 
          Here, graduate students—from the master's through the doctorate, and in professional and certificate programs—put
           knowledge to work at Fortune 500 and startup companies,
           universities, government agencies, nonprofits, and global organizations.
         </h6>
        </div>
      </div>
        </div> 

      <div className="second-container1">
        <div className="research-container">
          
      <img src={require("../static/research.webp")} className="img_style" />
      
      </div>
      </div>

    </>
  );
}
