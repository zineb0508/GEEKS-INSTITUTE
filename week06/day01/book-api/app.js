// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import the book routes
const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);

// Route for the root URL (/)
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Book API!</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});