import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Fn5yV0Auin4fdSprQl2L/books';

export async function fetchBooks() {
  const response = await axios.get(url);
  const books = response.data;
  const allBooks = Object.keys(books).map((key) => ({
    item_id: key,
    title: books[key][0].title,
    author: books[key][0].author,
  }));
  return allBooks;
}

export async function addnewBook(book) {
  const response = await axios.post(url, book);
  return response.data;
}

export async function deleteBook(id) {
  const response = await axios.delete(`${url}/${id}`);
  return response;
}
