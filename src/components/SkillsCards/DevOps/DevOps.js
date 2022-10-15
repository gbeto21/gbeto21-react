import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import devops from "./devopsData.json";

const CardDevOps = () => {
  return (
    <BaseCard
      sizeColImage={5}
      sizeColBody={7}
      data={devops.data}
      title="DevOps"
    />
  );
};

export default CardDevOps;
