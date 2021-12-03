import React from "react";
import Typed from "react-typed";
import "./Greetings.css";

const Greetings = () => {
  const stringTyping = [
    `Computer system engineer ⚙️`,
    "Full stack developer 🌐", 
    "AWS Certified Developer ☁️"
  ];

  return (
    <div>
      <div className="align-items-end">
        <p className="fs-4">Welcome!</p>
      </div>

      <div className="justify-content-start">
        <span className="fs-1 primary-text">
          👋🏻 Hello, I'm <span className="fs-1 greetings-name">Alberto</span>
        </span>
      </div>

      <div className="justify-content-start">
        <Typed
          className="typed-text"
          strings={stringTyping}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Greetings;
