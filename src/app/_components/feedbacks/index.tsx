"use client"
import React, { useState, useEffect } from 'react';
import './index.module.scss';

const feedbacks = [
  {
    text: "“Aprender nutrición con IFBB Academy ha sido muy fácil. Ahora puedo cuidar de mí y de mi familia”",
    name: "Angela Oramas",
    country: "Colombia",
  },
  {
    text: "“Ser um Personal Trainer era meu grande objetivo. Graças ao curso da IFBB Academy, consegui me formar, estudando no meu tempo livre”",
    name: "Jair Laroche",
    country: "Brazil",
  },
  {
    text: "“After completing the Abdominal Training Course, I have more knowledge to advise my students about how to improve their sports performance”",
    name: "Mohammad Al Abbas",
    country: "EAU",
  },
  {
    text: "“El Bodybuilding es mi pasión y, con el Master de IFBB Academy, se ha convertido también en mi profesión. Complemento mi trabajo en un club deportivo con el asesoramiento a atletas de competición”",
    name: "Edgard López",
    country: "Spain",
  },
  {
    text: "“Sportsmenki ozhidali takoi kurs ot Akademii IFBB, chtoby uluchshit’ svoi rezultaty na sorevnovaniah”",
    name: "Alla Petrova",
    country: "Russia",
  },
];

const feed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero-section">
      <div className="feedback-container">
      <div className="titleContainer">
    <div className="title">
      <h1>STUDENTS FEEDBACK</h1>
      <hr className="customHr" />
          </div>
  </div>
        <div className="feedback-text">
          <p>{feedbacks[currentIndex].text}</p>
          <hr className='customFeedbackHr'/>
          <span>{feedbacks[currentIndex].name}, {feedbacks[currentIndex].country}</span>
        </div>
        <div className="dots">
          {feedbacks.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default feed;
