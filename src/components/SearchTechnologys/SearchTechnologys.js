import React from "react";
import DropDownMultiSelectTechnologys from "../DropDownMultiSelectTechnologys/DropDownMultiSelectTechnologys";

const SearchTechnologys = ({ onChange }) => {
  return (
    <div className="row">
      <div className="col">
        <DropDownMultiSelectTechnologys onChange={onChange} />
      </div>
    </div>
  );
};

export default SearchTechnologys;
