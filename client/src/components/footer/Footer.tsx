import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div>
        <div>
          <h1>Houssem</h1>
          <h4>Software Engineer</h4>
          <a href="#about">About Me</a>
        </div>

        <div>
          <p>More</p>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Follow</p>
          <ul>
            <li>
              <a href="https://github.com/Housematics" target="_blank">
                <i className="fa-brands fa-square-github"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/eltaeif-houssem"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.upwork.com/freelancers/~010a466427f3bfe69d"
                target="_blank"
              >
                <i className="fa-brands fa-upwork"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>2024 by Eltaeif Houssem, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
