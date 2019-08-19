import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books").then(results => results.data);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id).then(results => results.data);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData).then(results => results.data);
  }
};
