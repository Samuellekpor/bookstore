import React from 'react';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
  ];

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
