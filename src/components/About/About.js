import React, { Fragment } from "react";
import Separator from "../Separator/Separator";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const About = () => {
  return (
    <Fragment>
      <div className="container-background-start">
        <div className="container container-about">
          <div className="container-profile-picture">
            <ProfilePicture />
          </div>
          {/* <div className="row justify-content-center">
              <ProfilePicture />
            </div> */}
          <div className="row justify-content-md-center">
            <SocialNetwork />
          </div>
          <div className="row justify-content-center">
            <Separator />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
