import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import certifications from "./certificationsData.json";

const CardCertifications = () => {
  return (
    <BaseCard data={certifications.data} title="Licenses & certifications" />
  );
};

export default CardCertifications;
