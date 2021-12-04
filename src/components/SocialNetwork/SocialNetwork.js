import React from "react";
import "./SocialNetwork.css";

const SocialNetwork = () => {
  return (
    <div className="social-network-container">
      <a href="https://github.com/gbeto21" target="_blank">
        <i className="fa fa-github-square"></i>
      </a>
      <a href="https://mx.linkedin.com/in/gbeto21" target="_blank">
        <i className="fa fa-linkedin-square"></i>
      </a>
      <a href="https://twitter.com/gbeto21" target="_blank">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/gbeto21/" target="_blank">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/gbeto21" target="_blank">
        <i className="fa fa-facebook-square"></i>
      </a>
    </div>
  );
};

export default SocialNetwork;
