import React from "react";
import DropDownMultiSelectTechnologys from "../DropDownMultiSelectTechnologys/DropDownMultiSelectTechnologys";
import ButtonSearchProject from "../ButtonSearchProjects/ButtonSearchProject";

const SearchTechnologys = ({ onChange, onSearch }) => {
  return (
    <div className="row">
      <div className="col">
        <DropDownMultiSelectTechnologys onChange={onChange} />
      </div>
      {/* <div className="col-3 pl-1">
        <ButtonSearchProject onSearch={onSearch} />
      </div> */}
    </div>
  );
};

export default SearchTechnologys;
