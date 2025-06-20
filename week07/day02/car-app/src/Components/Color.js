// Color.js
import React, { useState, useEffect } from 'react';

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, []); // Only runs on mount

  const changeColor = () => {
    setFavoriteColor("white");
  };

  return (
    <div>
      <h1>{favoriteColor}</h1>
      <button onClick={changeColor}>Change to White</button>
    </div>
  );
};

export default Color;