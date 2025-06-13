const books = require("../models/bookModel");

// Read all books
const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// Read one book by ID
const getBookById = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json(book);
};

// Create new book
const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

module.exports = { getAllBooks, getBookById, createBook };
