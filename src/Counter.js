import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button data-testid="increment-button" onClick={increment}>Increment</button>
      <button data-testid="decrement-button" onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
