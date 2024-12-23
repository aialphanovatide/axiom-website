import React, { useEffect, useState } from "react";
import FlowAnimation from "../../assets/flow-animation.gif";
import AnimatedText from "../AnimatedText/AnimatedText";
import "./Flow.css";

const Flow = ({ isActive }) => {
  const [showTexts, setShowTexts] = useState(false);

  useEffect(() => {
    const GIF_DURATION = 5000;
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
      <h2 className="title">Flow</h2>
      <p className="description flow-description">
        Axiom Dynamics integrates seamlessly into your current frameworks. No
        massive disruption, just continuous refinement.
      </p>
      <div className="flow-animation-container">
        {showTexts && (
          <div className="flow-first-text-container">
            <AnimatedText
              text={
                "Unobtrusive presence that refines, rather than rebuilds, your processes."
              }
              textAdditionalClasses="flow-fade-in"
            />
          </div>
        )}
        {showTexts && (
          <div className="flow-second-text-container">
            <AnimatedText
              text={"Effortless integration, no steep learning curves."}
              textAdditionalClasses="flow-fade-in"
            />
          </div>
        )}
        <img
          src={FlowAnimation}
          alt="Flow page Animation"
          className="animation"
        />
        {showTexts && (
          <div className="flow-third-text-container">
            <AnimatedText
              text={
                "Clarity that feels inevitable, as if complexity were never there."
              }
              textAdditionalClasses="flow-fade-in"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Flow;
