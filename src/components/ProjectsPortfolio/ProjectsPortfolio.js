import React from "react";

const ProjectsPortfolio = ({ search }) => {
  if (search) {
    return <div>Searching.</div>;
  }
  return <div></div>;
};

export default ProjectsPortfolio;
