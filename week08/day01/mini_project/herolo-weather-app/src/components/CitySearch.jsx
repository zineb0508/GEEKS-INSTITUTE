// src/components/CitySearch.jsx
import React, { useState } from 'react';

export default function CitySearch({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
