import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

  return (
    <li>
      <h2 className="title">{title}</h2>
      <span className="author">{author}</span>
      <div className="buttons">
        <button type="button" className="comment">Comments</button>
        <span>|</span>
        <button type="button" className="remove">Remove</button>
        <span>|</span>
        <button type="button" className="edit">Edit</button>
      </div>
    </li>
  );
}

export default Book;
