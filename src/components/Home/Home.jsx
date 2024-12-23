import React from "react";
import "./Home.css";
import HomeAnimation from "../../assets/home-animation.gif";

const Home = () => {
  return (
    <div className="page_container">
      <h2 className="title">Redefine the Rules of Strategy</h2>
      <img
        src={HomeAnimation}
        alt="Home page Animation"
        className="animation home-anim"
      />
    </div>
  );
};

export default Home;
