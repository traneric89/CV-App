import React from "react";
import { BsGithub, BsLinkedin, BsGlobe2 } from "react-icons/bs";

const CVPersonalInfo = ({ personalInfo }) => {
  return (
    <div className="personal-cv">
      <div className="info">
        <h1>{personalInfo.name}</h1>
        <h3>{personalInfo.city}</h3>
        <h3>{personalInfo.email}</h3>
        <h3>{personalInfo.contactNo}</h3>
      </div>
      <div className="icons">
        <BsGlobe2 />
        <BsLinkedin />
        <BsGithub />
      </div>
    </div>
  );
};

export default CVPersonalInfo;
