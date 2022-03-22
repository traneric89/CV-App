import React from "react";

const CVPersonalInfo = ({ personalInfo }) => {
  return (
    <div className="personal-cv">
      <h2>{personalInfo.name}</h2>
      <h3>{personalInfo.city}</h3>
      <h3>{personalInfo.email}</h3>
      <h3>{personalInfo.contactNo}</h3>
    </div>
  );
};

export default CVPersonalInfo;
