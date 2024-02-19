import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/devops.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Frontend",
    description: [
      "ReactJs, Angular, Typescript",
      "MaterialUI, Tailwindcss",
      "Redux, Mobx, Figma",
    ],
  },
  {
    id: 2,
    image: Image2,
    title: "Backend",
    description: [
      "NodeJs, Express, Firebase",
      "Springboot, Junit, Mockito",
      "Hibernate, Mysql, PostgreSql",
    ],
  },
  {
    id: 3,
    image: Image3,
    title: "Devops",
    description: [
      "Git, Gitlab, AWS",
      "Docker, Kubernetes",
      "Jenkins, Jira, Maven",
    ],
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map((item, key) => (
          <div className="services_card" key={key}>
            <img src={item.image} className="services_img" />
            <h3 className="services_title">{item.title}</h3>
            {item.description.map((text, key) => (
              <p className="services_description" key={key}>
                &#x2022; {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
