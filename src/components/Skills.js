import React from "react";
import { useState } from "react";

const Skills = ({ onAddSkills }) => {
  const [skill, setSkill] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!skill) {
      alert("Please fill in all fields");
      return;
    }
    onAddSkills({ skill });
    setSkill("");
  };

  return (
    <div>
      <h2>Skills</h2>
      <form className="skills-form" onSubmit={onSubmit}>
        <input
          type="text"
          id="skill"
          placeholder="Skill"
          autoComplete="false"
          onChange={(e) => setSkill(e.target.value)}
        />
        <input type="submit" value="Add Skill" />
      </form>
    </div>
  );
};

export default Skills;
