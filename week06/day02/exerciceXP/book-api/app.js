const express = require("express");
const app = express();
const bookRoutes = require("./server/routes/bookRoutes");

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/book", bookRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
