import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import languages from "./languajesData.json";

const CardLanguages = () => {
  return (
    <BaseCard
      sizeColImage={5}
      sizeColBody={7}
      data={languages.data}
      title="Languages"
    />
  );
};

export default CardLanguages;
