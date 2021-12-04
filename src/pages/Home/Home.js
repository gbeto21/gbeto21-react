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