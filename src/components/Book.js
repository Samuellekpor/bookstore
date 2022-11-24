import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const book = props;

  const dispatch = useDispatch();

  function removeABook() {
    dispatch(removeBook(book.id));
  }

  return (
    <div>
      <h2 className="title">{book.title}</h2>
      <span className="author">{book.author}</span>
      <div className="buttons">
        <button type="button" className="comment">Comments</button>
        <span>|</span>
        <button type="button" className="remove" onClick={removeABook}>Remove</button>
        <span>|</span>
        <button type="button" className="edit">Edit</button>
      </div>
    </div>
  );
}

export default Book;
