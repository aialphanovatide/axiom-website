import React, { useEffect, useState } from "react";
import BeginAnimation from "../../assets/begin-animation.gif";
import GradientsCircle from "../../assets/gradients-circle.png";
import "./Begin.css";
import { BeginButton } from "./BeginButton/BeginButton";

const Begin = ({ isActive }) => {
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
    <div className="page_container begin-bg">
      <h2 className="title">Begin</h2>
      <p className="begin-description">
        Ready to move beyond the confines of conventional wisdom? Let’s define
        new standards in strategy—together.
      </p>
      <div className="begin-animation-container">
        {/* <img
          src={BeginAnimation}
          alt="Begin page Animation"
          className="animation begin-animation"
        />    */}
        {/* <div alt="Request Information Circle" className="gradients-img">
          <p className="begin-text">Request Information</p>
        </div> */}
        <BeginButton />
      </div>
    </div>
  );
};

export default Begin;
