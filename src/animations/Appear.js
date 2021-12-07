import React from "react";
import { motion } from "framer-motion";

const AnimationAppear = ({ children }) => {
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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationAppear;
