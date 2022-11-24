import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/Books';

function AddBook() {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const { title, author } = input;
  function addNewBook(event) {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setInput({
      title: '',
      author: '',
    });
  }
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input id="title" placeholder="Book title" value={title} onChange={(e) => setInput({ ...input, title: e.target.value })} />
        <input id="author" placeholder="Author" value={author} onChange={(e) => setInput({ ...input, author: e.target.value })} />
        <button onClick={addNewBook} type="submit">Add book</button>
      </form>
    </div>
  );
}

export default AddBook;
