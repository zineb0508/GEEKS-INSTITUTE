// src/components/WeatherCard.jsx
import React from 'react';

export default function WeatherCard({ data }) {
  if (!data) return null;

  // format icon url
  const iconUrl = `https://developer.accuweather.com/sites/default/files/${String(data.icon).padStart(2, '0')}-s.png`;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: 300, marginTop: 20 }}>
      <h2>{data.city}, {data.country}</h2>
      <p>{data.condition}</p>
      <p>{data.temperature} °C</p>
      <img src={iconUrl} alt={data.condition} />
    </div>
  );
}

