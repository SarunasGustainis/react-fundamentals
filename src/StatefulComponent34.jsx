import React, { useState } from 'react';

function StatefulComponent34() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

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
