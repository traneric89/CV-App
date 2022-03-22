import React from "react";

const CVWork = ({ work }) => {
  return (
    <div className="work-cv">
      <h2>{work.comapany}</h2>
      <h3>{work.position}</h3>
      <h4>{work.duration}</h4>
      <h4>{work.details}</h4>
    </div>
  );
};

export default CVWork;
