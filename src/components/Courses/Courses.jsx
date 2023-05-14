import React from "react";

// ~ Courses Component
const Courses = () => {
  return (
    <div>
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
      <h2>Subject: {props.subject}</h2>
      <h3>Topic: {props.topic}</h3>
    </div>
  );
};
export default Courses;
