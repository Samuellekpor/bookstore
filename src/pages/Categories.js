import React from 'react';
import { useDispatch } from 'react-redux';
import { checkBook } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  function checkBookCategory() {
    dispatch(checkBook());
  }
  return (
    <div>
      <button type="button" onClick={checkBookCategory}>Check status</button>
    </div>
  );
}

export default Categories;
