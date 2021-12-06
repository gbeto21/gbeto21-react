import React from "react";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
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
    if (loading) return <Spinner message="Loading" />;

    if (error)
      return (
        <ErrorAlert
          message="Error fetching the technologyes."
          details={error.message}
        />
      );
    console.log("Data on Projects:", data);

    return <div>Searching.</div>;
  }
  return <div></div>;
};

export default ProjectsPortfolio;
