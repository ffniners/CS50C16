import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './projectCard';
import Hammer from 'hammerjs';
import './projectCard.css';

function ProjectCards() {
  const [cardData, setCardData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipeContainer = useRef(null);

  useEffect(() => {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => setCardData(data));
  }, []);

  useEffect(() => {
    if (swipeContainer.current && cardData.length > 0) {
      const mc = new Hammer(swipeContainer.current);
      mc.on("swipeleft swiperight", (ev) => {
        if (ev.type === 'swipeleft') {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        } else if (ev.type === 'swiperight') {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
        }
      });
    }
  }, [cardData.length]);

  return (
    <div ref={swipeContainer} className="container">
      {cardData.length > 0 && (
        <ProjectCard 
          key={cardData[currentIndex].id} 
          title={cardData[currentIndex].title} 
          description={cardData[currentIndex].description}
          date={cardData[currentIndex].date}
          link={cardData[currentIndex].link}
          img={cardData[currentIndex].img}
          
        />
      )}
    </div>
  );
}

export default ProjectCards;


