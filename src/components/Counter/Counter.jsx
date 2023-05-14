import React, { useState } from "react";

// * State declaration with Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 5);
  const btnStyle = {
    backgroundColor: "#eee",
    color: "#f62ed1",
    border: "none",
    borderRadius: "0.2rem",
    padding: "0.5rem",
    cursor: "pointer",
    margin: "0.3rem",
  };
  return (
    <div>
      <h2 style={{ textDecoration: "underline double green" }}>
        Counter Component
      </h2>
      <h5>Count: {count}</h5>
      <button onMouseMove={handleIncrease} style={btnStyle}>
        Increase
      </button>
      <button onMouseMove={() => setCount(count - 5)} style={btnStyle}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
