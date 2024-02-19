import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am Eltaeif Houssem, a software engineer from tunisia. I have a
              rich experience in Web/Mobile development.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Frontend</h3>
                <span className="skills_number">65%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Backend</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Devops</h3>
                <span className="skills_number">59%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
