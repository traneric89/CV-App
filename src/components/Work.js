import React from "react";
import { useState } from "react";

const Work = ({ onAddWork }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [duration, setDuration] = useState("");
  const [details, setDetails] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(company && position && duration && details)) {
      alert("Please fill in all fields");
      return;
    }
    onAddWork({ company, position, duration, details });
    setCompany("");
    setPosition("");
    setDuration("");
    setDetails("");
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <form className="work-form" onSubmit={onSubmit}>
        <input
          type="text"
          id="company"
          placeholder="Company "
          autoComplete="false"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          id="position"
          placeholder="Position"
          autoComplete="false"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          id="duration"
          placeholder="Duration"
          autoComplete="false"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          id="details"
          placeholder="Details"
          autoComplete="false"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <input type="submit" value="Add Work Experience" />
      </form>
    </div>
  );
};

export default Work;
