import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { getAllBooks } from '../redux/books/Books';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <div>
      <ul>
        {
          books.map((book) => (
            <li key={book.item_id}>
              <Book
                id={book.item_id}
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
