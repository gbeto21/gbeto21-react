import React from "react";

const Spinner = ({ message }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">{message}</span>
      </div>
    </div>
  );
};

export default Spinner;
