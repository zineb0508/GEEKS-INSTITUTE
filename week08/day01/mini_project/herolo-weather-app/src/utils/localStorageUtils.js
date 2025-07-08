export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites')) || [];
};

export const addFavorite = (city) => {
  const current = getFavorites();
  if (!current.includes(city)) {
    localStorage.setItem('favorites', JSON.stringify([...current, city]));
  }
};

export const removeFavorite = (city) => {
  const updated = getFavorites().filter((c) => c !== city);
  localStorage.setItem('favorites', JSON.stringify(updated));
};
