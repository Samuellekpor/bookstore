import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Fn5yV0Auin4fdSprQl2L/books';

// Actions
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

// Initial state
const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
];

// Action creators
export function addBook(payload) {
  return {
    type: ADDED_BOOK,
    payload,
  };
}

export function removeBook(payload) {
  return {
    type: REMOVED_BOOK,
    payload,
  };
}

export function getBooks(payload) {
  return {
    type: GET_BOOKS,
    payload,
  };
}

// Reducer
function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state,
        action.payload,
      ];
    case REMOVED_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async() => {
  const books = axios.get(url).then((res) => res.data);
  const allBooks = Object.keys(books).map((key) => ({
    id: key,
    title: books[key][0].title,
    author: books[key][0].author,
  }));
  return allBooks;
});

export function postReducer(state = initialState, action) {
  switch(action.type) {
    case 'books/fetchBooks/fulfilled':
      return action.payload;
    default:
      return state;
  }
}

export default booksReducer;
