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
        <div className="row row-cols-2">
          <div className="col-10">
            <SearchTechnologys onChange={onChange} />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-outline-success">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
