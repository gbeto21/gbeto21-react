import React from "react";
import './Introduction.css'

const currentYear = new Date().getFullYear()
const yearStarted = new Date('2013-08-16').getFullYear()
const calculateYears = () => Math.abs(currentYear - yearStarted)

const Introduction = () => {
  const text = `👋🏻 I'm a software developer solving problems for ${calculateYears()} years, seeking to
  create maintainable and scalable solutions by implementing good practices.`
  return (
    <p className="fs-5 introduction">
      {text}
    </p>
  );
};

export default Introduction;
