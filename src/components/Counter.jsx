import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter value is: {counter}</h1>
      <br />
      <button onClick={increaseCounter}>Increase</button>
      <br />
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
}
