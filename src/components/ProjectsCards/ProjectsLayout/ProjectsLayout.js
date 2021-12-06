import React from "react";
import "./ProjectsLayout.css";

const ProjectsLayout = ({ projects }) => {
  const projectsCards = projects.map((project) => {
    return (
      <div className="col pl-0" id={project._id}>
        <div className="card h-100">
          <div className="card-header">{project.name}</div>
          <img
            src={project.image}
            className="card-img-top"
            alt={project.name}
          />
          <div className="card-body container-card-body">
            <p className="card-text">{project.description}</p>
            {project.url && (
              <a href={project.url} className="btn mb-2 btn-visit">
                Visit
              </a>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mt-4 mb-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 g-4">
        {projectsCards}
      </div>
    </div>
  );
};

export default ProjectsLayout;
