import React, { useState } from "react";
import SearchTechnologys from "../../components/SearchTechnologys/SearchTechnologys";
import ProjectsPortfolio from "../../components/ProjectsPortfolio/ProjectsPortfolio";
import "./Portfolio.css";

const Portfolio = () => {
  const [technologys, setTechnologys] = useState([]);

  const onChange = (selected) => {
    setTechnologys(selected);
  };

  return (
    <div className="container-background-start">
      <div className="container container-portfolio pl-2">
        <SearchTechnologys onChange={onChange} />
        <ProjectsPortfolio technologys={technologys} />
      </div>
    </div>
  );
};

export default Portfolio;
