import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteABook } from '../redux/books/Books';

function Book(props) {
  const book = props;

  const dispatch = useDispatch();

  function removeABook() {
    dispatch(deleteABook(book.id));
  }

  return (
    <div className="bigContainer">
      <div className="bookContainer">
        <h2 className="title">{book.title}</h2>
        <span className="author">{book.author}</span>
        <div className="buttons">
          <button type="button" className="comment">Comments</button>
          <span className="line1" />
          <button type="button" className="remove" onClick={removeABook}>Remove</button>
          <span className="line1" />
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="progressContainer">
        <div className="progressBar">
          <CircularProgressbar value={66} />
        </div>
        <div className="completed">
          <p className="percentage">66%</p>
          <p className="comp">completed</p>
        </div>
      </div>
      <span className="line2" />
      <div className="chapterContainer">
        <p className="chapter">Current Chapter</p>
        <h3 className="chapterTitle">Chapter 1: Resilience</h3>
        <button type="button" className="update-progress">Update Progress</button>
      </div>
    </div>
  );
}

export default Book;
