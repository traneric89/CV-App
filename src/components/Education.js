import React from "react";
import { useState } from "react";

const Education = ({ onAddEducation }) => {
  const [school, setSchool] = useState("");
  const [subject, setSubject] = useState("");
  const [degree, setDegree] = useState("");
  const [completion, setCompletion] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(school && subject && degree && completion)) {
      alert("Please fill in all fields");
      return;
    }
    onAddEducation({ school, subject, degree, completion });
    setSchool("");
    setSubject("");
    setDegree("");
    setCompletion("");
  };

  return (
    <div>
      <h2>Education</h2>
      <form className="education-form" onSubmit={onSubmit}>
        <input
          type="text"
          id="school"
          placeholder="School Name"
          autoComplete="false"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <input
          type="text"
          id="subject"
          placeholder="Area of Study"
          autoComplete="false"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          id="degree"
          placeholder="Degree"
          autoComplete="false"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <input
          type="text"
          id="completion"
          placeholder="Year of Completion"
          autoComplete="false"
          value={completion}
          onChange={(e) => setCompletion(e.target.value)}
        />
        <input type="submit" value="Add Education" />
      </form>
    </div>
  );
};

export default Education;
