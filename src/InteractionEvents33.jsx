import React from 'react';

function InteractionEvents33() {

  const handleClick = () => {
    window.alert("Button was clicked.");
  }

  const handleChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <button onClick={handleClick}>Button</button>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default InteractionEvents33;
