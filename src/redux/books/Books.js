import { v4 as uuidv4 } from 'uuid';
import { fetchBooks, addnewBook, deleteBook } from '../../APIcall';

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

export function fetchAllBooks(){
 return async function(dispatch){
  const books = await fetchBooks();
  dispatch(bookFetch(books));
};
}

export function saveBooks(){
  return async function(dispatch){
  await addnewBook(payload);
  dispatch(addBook(payload));
};
}

export function deleteABook(){
  return async function(dispatch){
  await deleteBook(payload);
  dispatch(removeBook(payload));
  dispatch(fetchAllBooks());
};
}

export default booksReducer;
