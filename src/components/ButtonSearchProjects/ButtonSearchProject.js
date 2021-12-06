import React from "react";
import "./ButtonSearchProject.css";

const ButtonSearchProject = ({ onSearch }) => {
  return (
    <button
      onClick={onSearch}
      type="button"
      className="btn btn-outline-success"
    >
      Search
    </button>
  );
};

export default ButtonSearchProject;
