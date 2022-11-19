import React from 'react';

function AddBook() {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input id="title" placeholder="Book title" />
        <input id="author" placeholder="Author" />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default AddBook;
