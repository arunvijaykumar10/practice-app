import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <div>Counter</div>
      <br />
      <div className="number">{count}</div>
      <button
        className="subtractButton"
        onClick={decrement}
        disabled={count === 0}     
      >
        -
      </button>
      <button className="addButton" onClick={increment}>
        +
      </button>
      <br />
      <button className="resetButton" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;