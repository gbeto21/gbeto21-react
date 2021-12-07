import React from "react";
import Typed from "react-typed";
import AnimationAppear from "../../animations/Appear";
import "./Greetings.css";

const Greetings = () => {
  const stringTyping = [
    `Computer system engineer ⚙️`,
    "Full stack developer 🌐",
    "AWS Certified Developer ☁️",
    "Mastering Node 🎓",
    `Basketball player in the Monos team 🏀🐒`,
    "Guitar learner 🎸",
  ];

  return (
    <AnimationAppear>
      <div className="align-items-end">
        <p className="fs-4 mb-0">Welcome!</p>
      </div>

      <div className="justify-content-start">
        <span className="fs-2">
          👋🏻 Hello, I'm <span className="fs-2 greetings-name">Alberto</span>
        </span>
      </div>

      <div className="justify-content-start mt-2">
        <Typed
          className="typed-text"
          strings={stringTyping}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </AnimationAppear>
  );
};

export default Greetings;
