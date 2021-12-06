import React from "react";
import SearchTechnologys from "../../components/SearchTechnologys/SearchTechnologys";
import "./Portfolio.css";

const onChange = (selected) => {
  console.log(selected);
};

const Portfolio = () => {
  return (
    <div className="container-background-start">
      <div className="container container-skills">
        <SearchTechnologys onChange={onChange} />
      </div>
    </div>
  );
};

export default Portfolio;
