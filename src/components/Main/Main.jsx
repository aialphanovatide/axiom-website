import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Logo from "../../assets/axiom-logo-desktop.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Vision from "../Vision/Vision";
import "./Main.css";
import Home from "../Home/Home";

const Main = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const splideRef = useRef(null);
  const navRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(slideIndex);
    }
  }, [slideIndex]);

  useEffect(() => {
    setSlideIndex(currentIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const unshowNavbar = () => {
    navRef.current.classList.add("responsive_nav");
  };
  const getNavItemClass = (index) => {
    return slideIndex === index ? "nav_item_active" : "nav_item";
  };

  const changeSlideIndex = (index) => {
    setSlideIndex(index);
    unshowNavbar();
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar_container">
          <img
            src={Logo}
            alt=""
            className="nav_logo desktop"
            onClick={() => changeSlideIndex(0)}
          />
          <img
            src={Logo}
            alt=""
            className="nav_logo mobile"
            onClick={() => changeSlideIndex(0)}
          />
          <div ref={navRef} className="nav_items responsive_nav">
            <span
              onClick={() => changeSlideIndex(0)}
              className={getNavItemClass(0)}
            >
              Home
            </span>
            <span
              onClick={() => changeSlideIndex(1)}
              className={getNavItemClass(1)}
            >
              Vision
            </span>
            <span
              onClick={() => changeSlideIndex(2)}
              className={getNavItemClass(2)}
            >
              Tools
            </span>
            <span
              onClick={() => changeSlideIndex(3)}
              className={getNavItemClass(3)}
            >
              Flow
            </span>
            <span
              onClick={() => changeSlideIndex(4)}
              className={getNavItemClass(4)}
            >
              Impact
            </span>
            <span
              onClick={() => changeSlideIndex(5)}
              className={getNavItemClass(5)}
            >
              Begin
            </span>
          </div>
          <button className="nav_toggle" onClick={showNavbar}>
            <MenuIcon sx={{ color: "black", fontSize: "2.5rem" }} />
          </button>
        </div>
      </div>
      <div className="slide_container">
        <Splide
          ref={splideRef}
          options={{
            type: "slide",
            perPage: 1,
            autoHeight: true,
            height: "auto",
            width: "100%",
          }}
          onMove={(splide, newIndex) => setCurrentIndex(newIndex)}
        >
          <SplideSlide className="splide-slide is-active">
            <Home isActive={currentIndex === 0} />
          </SplideSlide>
          <SplideSlide className="splide-slide is-active">
            <Vision isActive={currentIndex === 1} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Main;
