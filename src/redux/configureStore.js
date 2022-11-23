import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/Books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;
