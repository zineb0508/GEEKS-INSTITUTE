// routes/books.js
const express = require('express');
const router = express.Router();

// Sample in-memory "database"
let books = [
  { id: 1, title: 'Book One', author: 'Author A' },
  { id: 2, title: 'Book Two', author: 'Author B' }
];

// Helper function to find index by ID
function findBookIndex(id) {
  return books.findIndex(book => book.id === id);
}

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// POST a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required.' });
  }

  const newBook = {
    id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update a book by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = findBookIndex(id);

  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required.' });
  }

  books[index] = { id, title, author };
  res.json(books[index]);
});

// DELETE a book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = findBookIndex(id);

  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(index, 1);
  res.status(204).send();
});

module.exports = router;