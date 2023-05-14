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
      <h3>List of learning languages:</h3>
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
