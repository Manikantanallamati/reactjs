import './App.css';
import { useState } from 'react';

function Counter() {
  const [count, setCount] =useState(0);

  const Increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment} disabled={count === 10}>
        Increment By +1
      </button>
      <button onClick={Decrement} disabled={count === 0}>
        Decrement By -1
      </button>
    </div>
  );
}

export default Counter;