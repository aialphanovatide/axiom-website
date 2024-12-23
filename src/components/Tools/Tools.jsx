import React, { useEffect, useState } from "react";
import ToolsAnimation from "../../assets/tools-animation.gif";
import AnimatedText from "../AnimatedText/AnimatedText";
import "./Tools.css";

const Tools = ({ isActive }) => {
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
      <h2 className="title">Tools</h2>
      <p className="description">
        Our platform, powered by Penelope AI, transforms infinite data into
        tailored intelligence.
      </p>
      <div className="tools-animation-container">
        {showTexts && (
          <div className="tools-first-text-container">
            <AnimatedText
              text={"Responsive dashboards that adapt as new data emerges."}
              textAdditionalClasses="tools-fade-in"
            />
          </div>
        )}
        <img
          src={ToolsAnimation}
          alt="Tools page Animation"
          className="animation"
        />
        {showTexts && (
          <div className="tools-second-text-container">
            <AnimatedText
              text={
                "AI-driven recommendations fine-tuned to your unique context."
              }
              textAdditionalClasses="tools-fade-in"
            />
          </div>
        )}
        {showTexts && (
          <div className="tools-third-text-container">
            <AnimatedText
              text={
                "Automated analysis, freeing you from conventional overhead and delays."
              }
              textAdditionalClasses="tools-fade-in"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;