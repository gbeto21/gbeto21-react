import React, { Fragment } from "react";
import Greetings from "../../components/Greetings/Greetings";
import SwiperTech from "../../components/SwiperTech/SwiperTech";
import WavesHome from "../../components/Waves/Home/WavesHome";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="container-background-center">
        <div className="container">
          <div className="row row-cols-1 row-lg-cols-2">
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <Greetings />
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <SwiperTech />
            </div>
          </div>
        </div>
      </div>
      <WavesHome />
    </Fragment>
  );
};

export default Home;
