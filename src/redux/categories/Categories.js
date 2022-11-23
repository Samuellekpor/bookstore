//Action
const CHECKED_BOOK = 'bookstore/categories/CHECKED_BOOK'

//Initial state

const initialState = [];

//Action creator
export function checkBook() {
  return {
    type: CHECKED_BOOK
  }
}

//Reducer

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKED_BOOK:
      return 'Under Construction'
    default:
      return state;
  }
};

export default categoriesReducer;