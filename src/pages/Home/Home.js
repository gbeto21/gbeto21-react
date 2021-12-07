import React, { Fragment } from "react";
import Greetings from "../../components/Greetings/Greetings";
import { motion } from "framer-motion";
import "./Home.css";
import SwiperTech from "../../components/SwiperTech/SwiperTech";

const Home = () => {
  const container = {
    hidden: {
      opacity: 1,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transsition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
      <div className="container-waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="0.22"
            d="M0,256L60,266.7C120,277,240,299,360,272C480,245,600,171,720,160C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </Fragment>
  );
};

export default Home;

{
  /* <div className="justify-content-start mt-auto">
                <motion.div
                  className="icons-wrapper"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <div style={{ display: "flex" }}>
                    <motion.div
                      className="item-1 item"
                      variants={item}
                    ></motion.div>
                    <motion.div
                      className="item-2 item"
                      variants={item}
                    ></motion.div>
                    <motion.div
                      className="item-3 item"
                      variants={item}
                    ></motion.div>
                    <motion.div
                      className="item-4 item"
                      variants={item}
                    ></motion.div>
                  </div>
                </motion.div>
              </div> */
}
