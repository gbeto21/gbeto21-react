import React from "react";
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
        <div>
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Error</h4>
            <p>Error loading the technologys.</p>
            <hr />
            <p class="mb-0">{error.message}</p>
          </div>
        </div>
      );
    console.log("Data on Projects:", data);

    return <div>Searching.</div>;
  }
  return <div></div>;
};

export default ProjectsPortfolio;
