import React, { Fragment } from "react";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import ProjectsLayout from "../ProjectsCards/ProjectsLayout/ProjectsLayout";
import { useQuery, gql } from "@apollo/client";
import Spinner from "../Spinner/Spinner";

const createqueryProjects = (technologys) => {
  if (technologys) {
    let queryParams = technologys.map((technology) => {
      let info = technology.split(",");
      return `{_id:"${info[0]}", name:"${info[1]}"}`;
    });

    return `query {
            projects(
                technologys:[${queryParams}]
                ){
                    _id
                    name
                    description
                    image
                    url
                    technologys{
                        _id
                        name
                    }
                }
            }`;
  }
  return "";
};

const ProjectsPortfolio = ({ technologys }) => {
  const query = createqueryProjects(technologys);
  const queryProjects = gql`
    ${query}
  `;
  const { data, loading, error } = useQuery(queryProjects);

  if (technologys.length) {
    if (loading)
      return (
        <div className="row row-cols-2">
          <Spinner message="Loading" />
        </div>
      );

    if (error)
      return (
        <div className="row row-cols-2">
          <ErrorAlert
            message="Error fetching the projects."
            details={error.message}
          />
        </div>
      );

    return <ProjectsLayout projects={data.projects} />;
  }
  return (
    <Fragment></Fragment>
  );
};

export default ProjectsPortfolio;
