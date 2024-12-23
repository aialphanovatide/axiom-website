import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Logo from "../../assets/axiom-logo-desktop.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Vision from "../Vision/Vision";
import Home from "../Home/Home";
import "./Main.css";
import Tools from "../Tools/Tools";
import Flow from "../Flow/Flow";
import Impact from "../Impact/Impact";
import Begin from "../Begin/Begin";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef(null);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const unshowNavbar = () => {
    navRef.current.classList.add("responsive_nav");
  };

  const changeSlideIndex = (index) => {
    setCurrentIndex(index);
    if (splideRef.current) {
      splideRef.current.splide.go(index);
    }
    unshowNavbar();
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar_container">
          <img
            src={Logo}
            alt="Axiom Dynamics logo"
            className="nav_logo desktop"
            onClick={() => changeSlideIndex(0)}
          />
          <img
            src={Logo}
            alt="Axiom Dynamics logo"
            className="nav_logo mobile"
            onClick={() => changeSlideIndex(0)}
          />
          <div ref={navRef} className="nav_items responsive_nav">
            {["Home", "Vision", "Tools", "Flow", "Impact", "Begin"].map(
              (label, index) => (
                <span
                  key={index}
                  onClick={() => changeSlideIndex(index)}
                  className={
                    currentIndex === index ? "nav_item_active" : "nav_item"
                  }
                >
                  {label}
                </span>
              )
            )}
          </div>
          <button className="nav_toggle" onClick={showNavbar}>
            <MenuIcon sx={{ color: "black", fontSize: "2.5rem" }} />
          </button>
        </div>
      </div>

      {/* Carrusel */}
      <div className="slide_container">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 1,
            pagination: true,
            arrows: true,
            autoHeight: true,
            height: "100vh",
          }}
          onMoved={(splide) => setCurrentIndex(splide.index)} // Actualiza el índice al moverse
        >
          <SplideSlide>
            <Home isActive={currentIndex === 0} />
          </SplideSlide>
          <SplideSlide>
            <Vision isActive={currentIndex === 1} />
          </SplideSlide>
          <SplideSlide>
            <Tools isActive={currentIndex === 2} />
          </SplideSlide>
          <SplideSlide>
            <Flow isActive={currentIndex === 3} />
          </SplideSlide>
          <SplideSlide>
            <Impact isActive={currentIndex === 4} />
          </SplideSlide>
          <SplideSlide>
            <Begin isActive={currentIndex === 5} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Main;
