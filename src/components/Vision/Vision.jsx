import React, { useEffect, useState } from "react";
import VisionAnimation from "../../assets/Vision-animation.gif";
import AnimatedText from "../AnimatedText/AnimatedText";
import "./Vision.css";

const Vision = ({ isActive }) => {
  const [showTexts, setShowTexts] = useState(false);

  useEffect(() => {
    const GIF_DURATION = 4000;
    const timer = setTimeout(() => {
      if (isActive) {
        setShowTexts(true);
      } else {
        setShowTexts(false);
      }
    }, GIF_DURATION);

    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <div className="page_container">
      <h2 className="title">Vision</h2>
      <p className="description">
        In a world where legacy consultancies chase yesterday’s frameworks, we
        replace guesswork with precision.
      </p>
      <div className="animation-container">
        {showTexts && (
          <div className="first-text-container">
            <AnimatedText
              text={
                "Uncover insights beyond the reach of traditional consulting."
              }
              textAdditionalClasses="fade-in"
            />
          </div>
        )}
        <img
          src={VisionAnimation}
          alt="Vision page Animation"
          className="animation"
        />
        {showTexts && (
          <div className="second-text-container">
            <AnimatedText
              text={
                "Act on AI-backed guidance that evolves as conditions shift."
              }
              textAdditionalClasses="second-fade-in"
            />
          </div>
        )}
        {showTexts && (
          <div className="third-text-container">
            <AnimatedText
              text={
                "Outmaneuver the status quo and set your own strategic pace."
              }
              textAdditionalClasses="second-fade-in"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Vision;
