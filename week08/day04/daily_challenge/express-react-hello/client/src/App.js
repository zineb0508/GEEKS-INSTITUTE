import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Fetch greeting on component mount
  useEffect(() => {
    async function fetchMessage() {
      try {
        const res = await fetch('http://localhost:5000/api/hello');
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        console.error('GET error:', error);
      }
    }
    fetchMessage();
  }, []); // empty deps = run once on mount

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
      });
      const data = await res.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error('POST error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{message}</h1>

      <form onSubmit={handleSubmit}>
        <input

          placeholder="Type something"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>

      <p>{responseMessage}</p>
    </div>
  );
}

export default App;


