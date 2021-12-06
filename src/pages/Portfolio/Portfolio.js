import React, { useState } from "react";
import SearchTechnologys from "../../components/SearchTechnologys/SearchTechnologys";
import ProjectsPortfolio from "../../components/ProjectsPortfolio/ProjectsPortfolio";
import "./Portfolio.css";

const Portfolio = () => {
  const [technologys, setTechnologys] = useState([]);
  let technologysParams = [];

  const onChange = (selected) => {
    technologysParams = selected;
  };

  const onSearch = () => {
    setTechnologys(technologysParams);
  };

  return (
    <div className="container-background-start">
      <div className="container container-skills pl-2">
        <SearchTechnologys onChange={onChange} onSearch={onSearch} />
        <ProjectsPortfolio technologys={technologys} />
      </div>
    </div>
  );
};

export default Portfolio;
