import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import frameworks from "./frameworksData.json";

const CardFrameworks = () => {
  return (
    <BaseCard
      sizeColImage={5}
      sizeColBody={7}
      data={frameworks.data}
      title="Frameworks"
    />
  );
};

export default CardFrameworks;
