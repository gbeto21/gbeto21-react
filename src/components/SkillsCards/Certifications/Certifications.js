import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import certifications from "./certificationsData.json";

const CardCertifications = () => {
  return (
    <BaseCard
      sizeColImage={3}
      sizeColBody={9}
      data={certifications.data}
      title="Licenses & certifications"
    />
  );
};

export default CardCertifications;
