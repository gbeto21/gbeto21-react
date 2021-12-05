import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import frameworks from "./frameworksData.json";

const CardFrameworks = () => {
  return (
    <BaseCard
      sizeColImage={6}
      sizeColBody={6}
      data={frameworks.data}
      title="Frameworks"
    />
  );
};

export default CardFrameworks;
