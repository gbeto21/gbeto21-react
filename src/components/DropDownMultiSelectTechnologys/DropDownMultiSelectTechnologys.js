import React from "react";
import { useQuery, gql } from "@apollo/client";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import Spinner from "../Spinner/Spinner";
import "./DropDownMultiSelectTechnologys.css";

const queryTechnologys = gql`
  query {
    technologys {
      _id
      name
    }
  }
`;

const generateTechnologys = (data) => {
  const technologys = data.map((technology) => {
    return {
      key: `${technology._id},${technology.name}`,
      label: technology.name,
    };
  });
  return technologys;
};

const DropDownMultiSelectTechnologys = ({ onChange }) => {
  const { data, loading, error } = useQuery(queryTechnologys);

  if (loading) return <Spinner message="Loading" />;

  if (error)
    return (
      <ErrorAlert
        message="Error fetching the technologyes."
        details={error.message}
      />
    );

  const technologys = generateTechnologys(data.technologys);

  return (
    <DropdownMultiselect
      handleOnChange={onChange}
      options={technologys}
      name="technologys"
    />
  );
};

export default DropDownMultiSelectTechnologys;
