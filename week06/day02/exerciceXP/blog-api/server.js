const express = require('express');
const app = express();
const port = process.env.port || 3000;

require('dotenv').config();

const postRoutes = require('./server/routes/postRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/posts', postRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
