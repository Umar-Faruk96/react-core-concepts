import "./App.css";

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

const style = {
  fontFamily: "monospace",
  color: "#d36d63",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Core Understanding of <b style={style}>{teacherData.teaches[4]}</b>
        </h1>

        <Course subject="React Learning" topic="Component Creation"></Course>
        <Course
          subject="React Learning"
          topic="Component Creation Dynamically"
        ></Course>
        <Course subject="React Learning" topic="Dynamic Component Creation with style"></Course>
      </header>
    </div>
  );
}

const Course = (props) => {
  // create style object to use css
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

export default App;
