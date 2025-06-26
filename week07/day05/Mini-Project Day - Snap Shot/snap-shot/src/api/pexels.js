import axios from 'axios';


const BASE_URL = 'https://api.pexels.com/v1/search';

export const fetchImages = async (query, perPage = 30) => {
  const response = await axios.get(BASE_URL, {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      query,
      per_page: perPage,
    },
  });

  return response.data.photos;
};

