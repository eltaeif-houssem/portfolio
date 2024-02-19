import React from "react";
import "./Resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h1 className="section_title">Experience</h1>

      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((item, key) => {
            if (item.category === "education") {
              return (
                <Card
                  key={key}
                  icon={item.icon}
                  title={item.title}
                  year={item.year}
                  desc={item.desc}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((item, key) => {
            if (item.category === "experience") {
              return (
                <Card
                  key={key}
                  icon={item.icon}
                  title={item.title}
                  year={item.year}
                  desc={item.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
