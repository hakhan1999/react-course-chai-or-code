import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    if (counter + 1 > 20) {
      setCounter(20);
    }
  };
  const decrement = () => {
    setCounter(counter - 1);
    if (counter - 1 < 0) {
      setCounter(0);
    }
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
