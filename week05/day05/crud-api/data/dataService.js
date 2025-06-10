const axios = require('axios');

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error.message);
    throw error;
  }
};

module.exports = { fetchPosts };
