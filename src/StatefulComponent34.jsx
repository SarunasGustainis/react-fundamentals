import React, { useState } from 'react';

function StatefulComponent34() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount > 0 ? prevCount - 1 : prevCount);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <p>
        <span>Result: </span>
        {count}
      </p>
    </div>
  );
}

export default StatefulComponent34;
