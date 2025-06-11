const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo');

app.use(express.json()); // Middleware to parse JSON
app.use('/todos', todoRoutes); // Mount the router

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
