import React, { useState } from 'react';

function StatefulComponent34() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <p>
        <span>Result: </span>
        {count}
      </p>
    </div>
  );
}

export default StatefulComponent34;
