import React, { useState, useEffect } from 'react';

function SynchronizingWithEffects35() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (count === 5) {
      window.alert('High FIVE!');
    }
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>
        <span>Result: </span>
        {count}
      </p>
    </div>
  );
}

export default SynchronizingWithEffects35;
