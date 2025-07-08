// File: src/components/FavoriteCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { removeFavorite } from '../utils/localStorageUtils';

function FavoriteCard({ data, onRemove }) {
  const handleRemove = () => {
    removeFavorite(data.name);
    onRemove(); // Refresh parent component list
  };

  return (
    <Card style={{ marginBottom: '1rem', maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h5">{data.name}</Typography>
        <Typography variant="body1">{data.weather[0].description}</Typography>
        <Typography variant="h6">{data.main.temp}°C</Typography>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <Button
          variant="outlined"
          color="error"
          onClick={handleRemove}
          style={{ marginTop: '1rem' }}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}

export default FavoriteCard;

