import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [position, setPosition] = useState(0);
  const getOffsets = () => {
    const sections = Array.from(document.querySelectorAll("section"));
    const rects = sections.map((item) => item.offsetTop);
    return rects;
  };

  const scrollHandler = () => {
    const rects = getOffsets();
    const scrollY = window.scrollY;

    if (scrollY < rects[1]) {
      setPosition(0);
      return;
    }

    if (scrollY >= rects[1] && scrollY < rects[2] - 1) {
      setPosition(1);
      return;
    }

    if (scrollY >= rects[2] - 1 && scrollY < rects[3] - 1) {
      setPosition(2);
      return;
    }

    if (scrollY >= rects[3] && scrollY < rects[4]) {
      setPosition(3);
      return;
    }

    if (scrollY >= rects[4] && scrollY < rects[5] - 100) {
      setPosition(4);
      return;
    }
    setPosition(5);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <nav className="navbar" id="navbar">
      <a href="#home">
        <span>{"{ "}</span>
        Housematics
        <span>{" }"}</span>
      </a>

      <ul>
        <li>
          <a href="#home" className={`${position === 0 && "active"}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={`${position === 1 && "active"}`}>
            About
          </a>
        </li>
        <li>
          <a href="#services" className={`${position === 2 && "active"}`}>
            Services
          </a>
        </li>
        <li>
          <a href="#resume" className={`${position === 3 && "active"}`}>
            Resume
          </a>
        </li>
        <li>
          <a href="#portfolio" className={`${position === 4 && "active"}`}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className={`${position === 5 && "active"}`}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
