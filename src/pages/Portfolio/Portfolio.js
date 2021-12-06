import React, { useState } from "react";
import SearchTechnologys from "../../components/SearchTechnologys/SearchTechnologys";
import ProjectsPortfolio from "../../components/ProjectsPortfolio/ProjectsPortfolio";
import "./Portfolio.css";

const Portfolio = () => {
  const [search, setSearch] = useState(false);
  const [technologys, setTechnologys] = useState([]);

  const onChange = (selected) => {
    setTechnologys(selected);
  };

  const onSearch = () => {
    console.log("Searching.", technologys);
    setSearch(true);
  };

  return (
    <div className="container-background-start">
      <div className="container container-skills">
        <SearchTechnologys onChange={onChange} onSearch={onSearch} />
        <ProjectsPortfolio search={search} />
      </div>
    </div>
  );
};

export default Portfolio;
