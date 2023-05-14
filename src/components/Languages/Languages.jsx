import React from "react";

// ~ Languages Array
const languages = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
  "Vue",
  "MySQL",
];

// ~ Languages Component
const Languages = () => {
  return (
    <div>
      <h2 style={{ textDecoration: "underline double green" }}>
        Languages Component
      </h2>
      <h5>List of learning languages:</h5>
      <ul style={{ listStyle: "none" }}>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>{" "}
    </div>
  );
};

// ^ Single Language Component

export default Languages;
