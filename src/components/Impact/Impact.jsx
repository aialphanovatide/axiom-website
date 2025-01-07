import React, { useEffect, useState } from "react";
import ImpactAnimation from "../../assets/impact-animation.gif";
import AnimatedText from "../AnimatedText/AnimatedText";
import "./Impact.css";

const Impact = ({ isActive }) => {
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
      <h2 className="title">Impact</h2>
      <p className="description impact-description">
        From steering high-level corporate moves to refining strategic
        initiatives for local ventures, our counsel outpaces traditional
        benchmarks.
      </p>
      <div className="impact-animation-container">
        <img
          src={ImpactAnimation}
          alt="Tools page Animation"
          className="impact-animation"
        />
        {showTexts && <div className="divisor-line" />}
        {showTexts && (
          <div className="impact-first-text-container">
            <AnimatedText
              text={
                "Uncover growth opportunities that old methods fail to see."
              }
              textAdditionalClasses="impact-fade-in"
            />
          </div>
        )}
        {showTexts && (
          <div className="impact-second-text-container">
            <AnimatedText
              text={"Dramatically shorten the cycle from analysis to action."}
              textAdditionalClasses="impact-fade-in"
            />
          </div>
        )}
        {showTexts && (
          <div className="impact-third-text-container">
            <AnimatedText
              text={
                "Achieve outcomes that feel preordained—yet are undeniably earned through advanced intelligence."
              }
              textAdditionalClasses="impact-fade-in"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Impact;
