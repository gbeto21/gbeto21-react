import React from "react";
import DropDownMultiSelectTechnologys from "../DropDownMultiSelectTechnologys/DropDownMultiSelectTechnologys";

const SearchTechnologys = ({ onChange }) => {
  return (
    <div className="row row-cols-2">
      <div className="col-10">
        <DropDownMultiSelectTechnologys onChange={onChange} />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-outline-success">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchTechnologys;
