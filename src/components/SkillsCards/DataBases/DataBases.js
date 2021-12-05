import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import databases from "./dataBasesData.json";

const CardDataBases = () => {
  return (
    <BaseCard
      sizeColImage={6}
      sizeColBody={6}
      data={databases.data}
      title="Data Bases"
    />
  );
};

export default CardDataBases;
