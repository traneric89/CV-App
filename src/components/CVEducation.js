import React from "react";

const CVEducation = ({ education }) => {
  return (
    <div className="education-cv">
      <h2>{education.school}</h2>
      <h3>{education.subject}</h3>
      <h3>{education.degree}</h3>
      <h4>{education.completion}</h4>
    </div>
  );
};

export default CVEducation;
