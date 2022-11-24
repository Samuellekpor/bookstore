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
            <li key={book.id}>
              <Book
                id={book.id}
                title={book.title}
                author={book.author}
              />
            </li>
          ))
        }
      </ul>
      <AddBook />
    </div>
  );
}

export default Books;
