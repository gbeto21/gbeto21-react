import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import devops from "./devopsData.json";

const CardDevOps = () => {
  return <BaseCard data={devops.data} title="DevOps" />;
};

export default CardDevOps;
