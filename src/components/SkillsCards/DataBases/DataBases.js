import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import databases from "./dataBasesData.json";

const CardDataBases = () => {
  return (
    <BaseCard
      sizeColImage={5}
      sizeColBody={7}
      data={databases.data}
      title="Data Bases"
    />
  );
};

export default CardDataBases;
