import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import devops from "./devopsData.json";

const CardDevOps = () => {
  return (
    <BaseCard
      sizeColImage={6}
      sizeColBody={6}
      data={devops.data}
      title="DevOps"
    />
  );
};

export default CardDevOps;
