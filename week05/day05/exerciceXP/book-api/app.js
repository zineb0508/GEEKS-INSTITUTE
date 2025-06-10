const express = require('express');
const app = express();
const PORT = 5000;

// Middleware pour lire le JSON
app.use(express.json());

// Données simulées
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988 },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari", publishedYear: 2011 }
];

// 📘 GET /api/books : Lire tous les livres
app.get('/api/books', (req, res) => {
  res.json(books);
});

// 📗 GET /api/books/:bookId : Lire un livre spécifique
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// 📕 POST /api/books : Créer un nouveau livre
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// 🚀 Lancer le serveur
app.listen(PORT, () => {
  console.log(`📚 Book API is running on http://localhost:${PORT}`);
});
