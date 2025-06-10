const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();
const PORT = 5000;

// Route pour récupérer les posts depuis JSONPlaceholder
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('✅ Données récupérées avec succès depuis JSONPlaceholder');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des posts' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
