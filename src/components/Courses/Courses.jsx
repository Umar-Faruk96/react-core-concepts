import React from "react";

// ~ Courses Component
const Courses = () => {
  return (
    <div style={{ marginBlock: "1rem" }}>
      <h2>Course Creation</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.6rem", marginTop: "0.8rem" }}>
        <Course subject="React 18 Learning" topic="Component Creation"></Course>
        <Course
          subject="React 18 Learning"
          topic="Component Creation with Inline Style"
        ></Course>
        <Course
          subject="React 18 Learning"
          topic="Dynamic Component Creation with Style Object"
        ></Course>
      </div>
    </div>
  );
};

// ^ Individual Course Component
const Course = (props) => {
  // ? create style object to use css
  const styling = {
    border: "2px solid #f62ed1",
    padding: "0.5rem",
    borderRadius: "0.2rem",
    margin: "0.4rem",
    width: "50%",
  };
  // console.log(props);
  return (
    <div style={styling}>
      <h3>Subject: {props.subject}</h3>
      <h5>Topic: {props.topic}</h5>
    </div>
  );
};
export default Courses;
