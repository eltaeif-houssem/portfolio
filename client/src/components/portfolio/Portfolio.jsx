import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (filter) => {
    const updatedItems = Menu.filter((item) => {
      return item.category === filter;
    });
    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work_item" onClick={() => filterItem("Web")}>
          Web
        </span>
        <span className="work_item" onClick={() => filterItem("Mobile")}>
          Mobile
        </span>
      </div>

      <div className="work_container grid">
        {items.map((item, key) => {
          const { image, title, category } = item;
          return (
            <div key={key}>
              <div className="work_card" key={key}>
                <div className="work_thumbnail">
                  <img src={image} alt="" className="work_img" />
                  <div className="work_mask"></div>
                </div>

                <span className="work_category">{category}</span>

                <h3 className="work_title">{title}</h3>
                <a href="#home" className="work_button work_button_code">
                  <i className="fa-brands fa-square-github work_button-icon"></i>
                </a>
                <a href="#home" className="work_button work_button_demo">
                  <i className="fa-solid fa-paperclip work_button-icon"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
