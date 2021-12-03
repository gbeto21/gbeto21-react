import React from "react";
import Typed from "react-typed";
import './Greetings.css'

const Greetings = () => {
  return (
    <div>
      <div className="align-items-end">
        <p className="fs-4">Welcome!</p>
      </div>

      <div className="justify-content-start">
        <p className="fs-1"> 👋🏻 Hello, I'm Alberto</p>
      </div>

      <div className="justify-content-start">
        <Typed
          className="fs-1 typed-text"
          strings={["Web developer", "AWS Certified", "Node", "Google."]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Greetings;
