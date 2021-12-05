import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import languages from "./languajesData.json";

const CardLanguages = () => {
  return (
    <BaseCard
      sizeColImage={6}
      sizeColBody={6}
      data={languages.data}
      title="Languages"
    />
  );
};

export default CardLanguages;
