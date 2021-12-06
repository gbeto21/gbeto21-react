import React from "react";
import { useQuery, gql } from "@apollo/client";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

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

const SearchTechnologys = ({ onChange }) => {
  const { data, loading, error } = useQuery(queryTechnologys);

  if (loading) return "Loading...";

  if (error) return <pre>{error.message}</pre>;

  console.log("Data: ", data);

  const technologys = generateTechnologys(data.technologys);
  console.log("Technologys", technologys);

  return (
    <DropdownMultiselect
      handleOnChange={onChange}
      options={technologys}
      name="technologys"
    />
  );
};

export default SearchTechnologys;
