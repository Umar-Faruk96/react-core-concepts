import React, { useState } from 'react';

// * State declaration with Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 5);
  const btnStyle = {
    margin: "0.5rem",
  };
  return (
    <div>
      <h3>State Component</h3>
      <h4>Count: {count}</h4>
      <button onMouseMove={handleIncrease} style={btnStyle}>
        Increase
      </button>
      <button onMouseMove={() => setCount(count - 5)}>Decrease</button>
    </div>
  );
};

export default Counter;