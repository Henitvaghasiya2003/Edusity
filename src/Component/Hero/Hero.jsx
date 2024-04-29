import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure battter education for a batter world</h1>
        <p>
          Our cutting-edge curriculm is desigan to empore student with the
          knowledge, skills, and experiences needed to execel the dynamic field
          of education
        </p>
        <button className="btn">Explore more <img src={dark_arrow} /></button>
      </div>
    </div>
  );
};

export default Hero;
