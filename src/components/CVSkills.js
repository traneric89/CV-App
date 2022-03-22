import React from "react";

const CVSkills = ({ skill }) => {
  return (
    <div className="skills-cv">
      <li>{skill.skill}</li>
    </div>
  );
};

export default CVSkills;
