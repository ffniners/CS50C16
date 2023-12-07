import React from 'react';
import './projectCard.css'; 
import Hammer from 'hammerjs';


function ProjectCard({title, description, date, link, img,}) {
  return (
    <div className="card">
      <div className="cardSec">
         <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
        <p><a href={link}>view now</a></p>
      </div>
      <div className="cardSec" style={{backgroundImage: `url(${img})`}}></div>
    </div>
  );
}

export default ProjectCard; 

