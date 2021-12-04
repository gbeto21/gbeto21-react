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
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <CardLanguages />
          </div>
          <div class="col">
            <CardFrameworks />
          </div>
          <div class="col">
            <CardDataBases />
          </div>
          <div class="col">
            <CardDevOps />
          </div>
          <div class="col">
            <CardCertifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
