import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {
          books.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
            />
          ))
        }
      </ul>
      <AddBook />
    </div>
  );
}

export default Books;
