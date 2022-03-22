import React from "react";
import CVPersonalInfo from "./CVPersonalInfo";
import CVEducation from "./CVEducation";
import CVWork from "./CVWork";
import CVSkills from "./CVSkills";

const CVContainer = ({ personalInfo, education, work, skills }) => {
  return (
    <div className="cv-container">
      {personalInfo.map((info) => (
        <CVPersonalInfo key={info.id} personalInfo={info} />
      ))}
      <h2>Education</h2>
      {education.map((education) => (
        <CVEducation key={education.id} education={education} />
      ))}
      <h2>Work Experience</h2>
      {work.map((work) => (
        <CVWork key={work.id} work={work} />
      ))}
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <CVSkills key={skill.id} skill={skill} />
        ))}
      </ul>
    </div>
  );
};

export default CVContainer;
