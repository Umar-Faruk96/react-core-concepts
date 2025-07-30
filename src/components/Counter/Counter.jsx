import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 5);
  const btnStyle = {
    backgroundColor: "#221919ff",
    color: "#f62ed1",
    border: "none",
    borderRadius: "0.2rem",
    paddingInline: "0.8rem",
    paddingBlock: "1rem",
    fontSize: "1rem",
    cursor: "pointer",
    marginInline: "0.3rem",
    marginBlock: "1rem",
  };
  return (
    <div style={{ marginBlock: "1rem" }}>
      <h2>Basic Counter</h2>
      <h5>Result: {count}</h5>
      <button onMouseMove={handleIncrease} style={btnStyle}>
        Increase by 5
      </button>
      <button onMouseMove={() => setCount(count - 5)} style={btnStyle}>
        Decrease by 5
      </button>
    </div>
  );
};

export default Counter;
