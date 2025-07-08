// File: src/pages/FavoritesPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getFavorites } from '../utils/localStorageUtils';
import FavoriteCard from '../components/FavoriteCard';

const API_KEY = '	kSp81YYcmorXx5TC5NGKYUjLSuJ2Rovl';

function FavoritesPage() {
  const [favoritesData, setFavoritesData] = useState([]);

  const fetchFavorites = async () => {
    const cities = getFavorites();
    const data = await Promise.all(
      cities.map(async (city) => {
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
          return res.data;
        } catch {
          return null;
        }
      })
    );
    setFavoritesData(data.filter(Boolean));
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Favorites</h2>
      {favoritesData.length === 0 && <p>No favorites yet.</p>}
      {favoritesData.map((data) => (
        <FavoriteCard key={data.id} data={data} onRemove={fetchFavorites} />
      ))}
    </div>
  );
}

export default FavoritesPage;
