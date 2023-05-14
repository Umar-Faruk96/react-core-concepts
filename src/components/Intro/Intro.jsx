import React from "react";

// ~ Intro Object
const teacherData = {
  name: `Jhankar Mahbub`,
  teaches: [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
  ],
};

// ~ Intro Style
const style = {
  fontFamily: "monospace",
  color: "#d36d63",
};

//   ~ Intro Component
const Intro = () => {
  return (
    <div>
      <h2>
        Core Understanding of <b style={style}>{teacherData.teaches[4]}</b>
      </h2>
      <h4>
        Instructor Name is <b style={style}>{teacherData.name}</b>
      </h4>
    </div>
  );
};

export default Intro;
