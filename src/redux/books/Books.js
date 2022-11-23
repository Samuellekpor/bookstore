// Actions
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

//Initial state
const initialState = [];

//Action creators
export function addBook(payload) {
  return { 
    type: ADDED_BOOK,
    payload
  }
}

export function removeBook(payload) {
  return { 
    type: REMOVED_BOOK,
    payload
  }
}

//Reducer
function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state,
        action.payload
      ];
    case REMOVED_BOOK:
      return state.filter[(book) => book.id !== action.payload];
    default:
      return state;
  }
};

export default booksReducer;