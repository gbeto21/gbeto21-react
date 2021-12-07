import React, { Fragment } from "react";
import AnimationAppear from "../../animations/Appear";
import Separator from "../../components/Separator/Separator";
import SocialNetwork from "../../components/SocialNetwork/SocialNetwork";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import Introduction from "../../components/Introduction/Introduction";

const About = () => {
  return (
    <Fragment>
      <AnimationAppear>
        <div className="container-background-start">
          <div className="container container-about">
            <div className="container-profile-picture">
              <ProfilePicture />
            </div>
            <div className="row justify-content-md-center">
              <SocialNetwork />
            </div>
            <div className="row justify-content-center">
              <Separator />
            </div>
            <div className="row justify-content-center">
              <Introduction />
            </div>
            <div className="row justify-content-center">
              <PersonalInfo />
            </div>
          </div>
        </div>
      </AnimationAppear>
    </Fragment>
  );
};

export default About;
