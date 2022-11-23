// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

//Initial state
const initialState = [];

//Action creators
export function addBook(payload) {
  return { 
    type: ADD_BOOK,
    payload }
}

export function removeBook(payload) {
  return { 
    type: REMOVE_BOOK,
    payload }
}

//Reducer
function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        action.payload
      ];
    case REMOVE_BOOK:
      return state.filter[(book) => book.id !== action.payload];
    default:
      return state;
  }
};

export default booksReducer;