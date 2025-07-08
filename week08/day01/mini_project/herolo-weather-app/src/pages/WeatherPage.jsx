// src/pages/WeatherPage.jsx
import React, { useState } from 'react';
import CitySearch from '../components/CitySearch';
import WeatherCard from '../components/WeatherCard';
import { getLocationKey, getWeatherByLocationKey } from '../api/accuweather';

export default function WeatherPage() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const location = await getLocationKey(city);
      const weatherData = await getWeatherByLocationKey(location.Key);

      setWeather({
        city: location.LocalizedName,
        country: location.Country.LocalizedName,
        temperature: weatherData.Temperature.Metric.Value,
        condition: weatherData.WeatherText,
        icon: weatherData.WeatherIcon,
      });
    } catch (err) {
      alert('City not found or invalid API key.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <CitySearch onSearch={fetchWeather} />
      <WeatherCard data={weather} />
    </div>
  );
}
