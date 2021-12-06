import React from "react";
import DropDownMultiSelectTechnologys from "../DropDownMultiSelectTechnologys/DropDownMultiSelectTechnologys";
import ButtonSearchProject from "../ButtonSearchProjects/ButtonSearchProject";

const SearchTechnologys = ({ onChange, onSearch }) => {
  return (
    <div className="row row-cols-2">
      <div className="col-10">
        <DropDownMultiSelectTechnologys onChange={onChange} />
      </div>
      <div className="col-2">
        <ButtonSearchProject onSearch={onSearch} />
      </div>
    </div>
  );
};

export default SearchTechnologys;
