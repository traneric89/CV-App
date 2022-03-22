import React from "react";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";
import CVContainer from "./components/CVContainer";
import { useState } from "react";
import uniqid from "uniqid";
import Footer from "./components/Footer";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skills, setSkills] = useState([]);

  //Add Personal Info
  const addPersonalInfo = (personalInfoInput) => {
    let id = uniqid();
    const newPersonalInfo = { id, ...personalInfoInput };
    setPersonalInfo([...personalInfo, newPersonalInfo]);
  };

  //Add Education
  const addEducation = (educationInput) => {
    let id = uniqid();
    const newEducation = { id, ...educationInput };
    setEducation([...education, newEducation]);
  };

  //Add Work
  const addWork = (workInput) => {
    let id = uniqid();
    const newWork = { id, ...workInput };
    setWork([...work, newWork]);
  };

  //Add Skills
  const addSkills = (skillsInput) => {
    let id = uniqid();
    const newSkills = { id, ...skillsInput };
    setSkills([...skills, newSkills]);
  };

  return (
    <div>
      <header className="header">
        <Header />
      </header>
      <div className="container">
        <FormContainer
          onAddPersonalInfo={addPersonalInfo}
          onAddEducation={addEducation}
          onAddWork={addWork}
          onAddSkills={addSkills}
        />
        <CVContainer
          personalInfo={personalInfo}
          education={education}
          work={work}
          skills={skills}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
