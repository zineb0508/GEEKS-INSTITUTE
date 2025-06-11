const express = require('express');
const app = express();

// Import the router
const router = require('./routes/index');

// Mount the router at the root path
app.use('/', router);

// 404 handler (put after all routes)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
