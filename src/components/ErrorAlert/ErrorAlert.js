import React from "react";

const ErrorAlert = ({ message, details }) => {
  return (
    <div>
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Error</h4>
        <p>{message}</p>
        <hr />
        <p class="mb-0">{details}</p>
      </div>
    </div>
  );
};

export default ErrorAlert;
