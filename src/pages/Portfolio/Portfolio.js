import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import "./Portfolio.css";
import { useQuery, gql } from "@apollo/client";

const queryTechnologys = gql`
  query {
    technologys {
      _id
      name
    }
  }
`;

const optionsArray = [
  { key: "au", label: "Australia" },
  { key: "ca", label: "Canada" },
  { key: "us", label: "USA" },
  { key: "pl", label: "Poland" },
  { key: "es", label: "Spain" },
  { key: "fr", label: "France" },
];

const onChange = (selected) => {
  console.log(selected);
};

const Portfolio = () => {
  const { data, loading, error } = useQuery(queryTechnologys);

  if (loading) return "Loading...";

  if (error) return <pre>{error.message}</pre>;

  console.log("Data: ", data);
  return (
    <div className="container-background-start">
      <div className="container container-skills">
        <div className="row row-cols-2">
          <div className="col-10">
            <DropdownMultiselect
              handleOnChange={onChange}
              options={optionsArray}
              name="countries"
            />
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
