import { useEffect, useState } from "react";
import "./ToolsAnimation.css";

export const ToolsAnimation = ({ isActive }) => {
  const [animationStart, setAnimationStart] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isActive) {
        setAnimationStart(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <div className="tools-animation-container">
      <div className="animated-circles-wrapper">
        <div
          className={`circle circle-xsm ${
            animationStart ? "slide-anim-1" : ""
          }`}
        />
        <div
          className={`circle circle-md ${animationStart ? "slide-anim-1" : ""}`}
        />
      </div>
      {animationStart && (
        <>
          <div className="animated-circles-wrapper">
            <div
              className={`circle circle-xsm ${
                animationStart ? "slide-anim-2" : ""
              }`}
            />
            <div
              className={`circle circle-md ${
                animationStart ? "slide-anim-2" : ""
              }`}
            />
          </div>
          <div className="animated-circles-wrapper">
            <div
              className={`circle circle-xsm ${
                animationStart ? "slide-anim-3" : ""
              }`}
            />
            <div
              className={`circle circle-md ${
                animationStart ? "slide-anim-3" : ""
              }`}
            />
          </div>
        </>
      )}
      <div
        className={`circle circle-sm ${animationStart ? "scale-up-sm" : ""}`}
      />
      <div
        className={`circle circle-lg ${animationStart ? "scale-up-lg" : ""}`}
      />
      <div
        className={`circle circle-xlg ${animationStart ? "scale-up-xlg" : ""}`}
      />
      <div
        className={`line line-vertical ${
          animationStart ? "vertical-line-anim" : ""
        }`}
      />
      <div
        className={`diagonal-line right-diagonal-line ${
          animationStart ? "diagonal-left-line-anim" : ""
        }`}
      />
      <div
        className={`diagonal-line left-diagonal-line ${
          animationStart ? "diagonal-right-line-anim" : ""
        }`}
      />
    </div>
  );
};
