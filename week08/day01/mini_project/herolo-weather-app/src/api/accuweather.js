import axios from 'axios';

const API_KEY = '6r2saEM88laqiPdm4yYEFdz2oPJEMJex'; // Replace with your real key

/// src/api/accuweather.js


export const getLocationKey = async (city) => {
  const res = await axios.get(
    'https://dataservice.accuweather.com/locations/v1/cities/search',
    { params: { apikey: API_KEY, q: city.trim() } }
  );
  if (!res.data || res.data.length === 0) throw new Error('City not found');
  return res.data[0];
};

export const getWeatherByLocationKey = async (locationKey) => {
  const res = await axios.get(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
    { params: { apikey: API_KEY } }
  );
  return res.data[0];
};
