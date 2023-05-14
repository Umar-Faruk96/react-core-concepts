import React from "react";

// ~ Courses Component
const Courses = () => {
  return (
    <div>
      <h2 style={{ textDecoration: "underline double green" }}>
        Course Component
      </h2>
      <Course subject="React Learning" topic="Component Creation"></Course>
      <Course
        subject="React Learning"
        topic="Component Creation Dynamically"
      ></Course>
      <Course
        subject="React Learning"
        topic="Dynamic Component Creation with style"
      ></Course>
    </div>
  );
};

// ^ Individual Course Component
const Course = (props) => {
  // ? create style object to use css
  const styling = {
    border: "2px solid red",
    padding: "0.5rem",
    borderRadius: "0.2rem",
    margin: "0.4rem",
    width: "50vw",
  };
  console.log(props);
  return (
    <div style={styling}>
      <h3>Subject: {props.subject}</h3>
      <h5>Topic: {props.topic}</h5>
    </div>
  );
};
export default Courses;
