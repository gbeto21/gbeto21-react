import React, { Fragment } from "react";
import Separator from "../Separator/Separator";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const About = () => {
  return (
    <Fragment>
      <div className="container-background-start">
        <div className="container">
          <div className="row justify-content-center">
            <ProfilePicture />
          </div>
          <div className="row justify-content-md-center">
            <SocialNetwork />
          </div>
          <div className="row justify-content-md-center">
            <Separator />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
