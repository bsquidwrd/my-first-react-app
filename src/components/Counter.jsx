import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function resetStates() {
    setCounter(0);
    setIncrementBy(1);
  }

  function increaseCounter() {
    setCounter(counter + incrementBy);
  }

  function decreaseCounter() {
    setCounter(counter - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <button onClick={resetStates}>Reset</button>

      <h1>Counter value is: {counter}</h1>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>

      <h1>We are incrementing the counter by {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
