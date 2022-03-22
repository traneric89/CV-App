import React from "react";

const CVWork = ({ work }) => {
  return (
    <div className="work-cv">
      <h2>{work.comapany}</h2>
      <h3>{work.position}</h3>
      <h4>{work.duration}</h4>
      <p>{work.details}</p>
    </div>
  );
};

export default CVWork;
