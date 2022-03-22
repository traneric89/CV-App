import React from "react";
import { useState } from "react";

const PersonalInfo = ({ onAddPersonalInfo }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(name && city && email && contactNo)) {
      alert("Please fill in all fields");
      return;
    }
    onAddPersonalInfo({ name, city, email, contactNo });
    setName("");
    setCity("");
    setEmail("");
    setContactNo("");
  };

  return (
    <div className="personal-container">
      <h2>Personal Information</h2>
      <form className="personal-form" onSubmit={onSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          autoComplete="false"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="city"
          placeholder="City"
          autoComplete="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          id="email"
          placeholder="Email"
          autoComplete="false"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="cell"
          placeholder="Contact No."
          autoComplete="false"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
        <input type="submit" value="Add Personal Information" />
      </form>
    </div>
  );
};

export default PersonalInfo;
