import React from "react";
import "./Skills.css";
import "bootstrap/dist/css/bootstrap.css";
import CardLanguages from "../../components/SkillsCards/Languages/Languages";
import CardFrameworks from "../../components/SkillsCards/Frameworks/Frameworks";
import CardDataBases from "../../components/SkillsCards/DataBases/DataBases";
import CardDevOps from "../../components/SkillsCards/DevOps/DevOps";
import CardCertifications from "../../components/SkillsCards/Certifications/Certifications";

const Skills = () => {
  return (
    <div className="container-background-start">
      <div className="container container-skills">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <CardLanguages />
          </div>
          <div className="col">
            <CardFrameworks />
          </div>
          <div className="col">
            <CardDataBases />
          </div>
          <div className="col">
            <CardDevOps />
          </div>
          <div className="col">
            <CardCertifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
