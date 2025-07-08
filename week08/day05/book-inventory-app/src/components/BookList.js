import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks
} from '../features/books/booksSelectors';

const BookList = () => {
  const [genre, setGenre] = useState('All');

  // Fetch books using selectors
  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const sciFiBooks = useSelector(selectScienceFictionBooks);

  // Choose which books to display
  let displayedBooks;
  switch (genre) {
    case 'Horror':
      displayedBooks = horrorBooks;
      break;
    case 'Fantasy':
      displayedBooks = fantasyBooks;
      break;
    case 'Science Fiction':
      displayedBooks = sciFiBooks;
      break;
    default:
      displayedBooks = allBooks;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Book Inventory</h2>
      
      {/* Genre selector */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Select Genre: </label>
        <select value={genre} onChange={e => setGenre(e.target.value)}>
          <option value="All">All</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
      </div>

      {/* Book list */}
      <ul>
        {displayedBooks.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} ({book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
