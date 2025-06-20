import React, { useState } from 'react';

function Events() {
  // Part I: clickMe alert function
  const clickMe = () => alert('I was clicked');

  // Part II: handleKeyDown function for Enter key detection
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You pressed Enter and typed: ${event.target.value}`);
    }
  };

  // Part III: toggle state
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Function to toggle between true/false
  const toggle = () => setIsToggleOn(prev => !prev);

  return (
    <div>
      <h1>Exercise 2: Events</h1>

      {/* Part I: Button with click alert */}
      <button onClick={clickMe}>Click Me</button>

      {/* Part II: Input with Enter key detection */}
      <input 
        type="text" 
        onKeyDown={handleKeyDown} 
        placeholder="Type and press Enter" 
        style={{ marginLeft: '10px' }}
      />

      {/* Part III: Toggle button */}
      <button onClick={toggle} style={{ marginLeft: '10px' }}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
