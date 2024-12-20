import React from "react";
import "./Home.css";
import HomeAnimation from "../../assets/home-animation.gif";

const Home = () => {
  return (
    <div className="page_container">
      <p className="paragraph-page">Redefine the Rules of Strategy</p>
      <img
        src={HomeAnimation}
        alt="Home page Animation"
        className="animation home-anim"
      />
    </div>
  );
};

export default Home;
