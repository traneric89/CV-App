import React from "react";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Work from "./Work";

const FormContainer = ({
  onAddPersonalInfo,
  onAddEducation,
  onAddWork,
  onAddSkills,
}) => {
  return (
    <div className="form-container">
      <PersonalInfo onAddPersonalInfo={onAddPersonalInfo} />
      <Education onAddEducation={onAddEducation} />
      <Work onAddWork={onAddWork} />
      <Skills onAddSkills={onAddSkills} />
    </div>
  );
};

export default FormContainer;
