import React, { useState, useEffect } from "react";
import Book from "./Book";
import { search, getAll, update } from "../Service/BooksAPI";
import { Link } from "react-router-dom";

const BookSearch = () => {
  const [bookList, allListBook] = useState([]);
  const [bookSearch, allSearchBooks] = useState([]);

  /**
   *
   * @description This function is used to search for books from the server
   */
  const handleOnChangeSearch = (e) => {
    const query = e.target.value;
    search(query).then((books) => {
      allSearchBooks(books);
    });
  };

  /**
   *
   * @description This function is used to update the bookshelf from the server
   */
  const bookSelect = (book, shelf) => {
    update(book, shelf);
  };

  /**
   * @description This function is used to get the list of books from the server
   */
  const fetchAllBooks = () => {
    getAll().then((books) => {
      allListBook(books);
    });
  };

  /**
   * @description This function filter in list book by book id
   */
  const filterBook = (searchBook) => {
    for (let i = 0; i < bookList.length; i++) {
      const book = bookList[i];
      if (book.id === searchBook.id) {
        return book;
      }
    }
    return searchBook;
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            onChange={(e) => handleOnChangeSearch(e)}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {bookSearch && bookSearch.length > 0
            ? bookSearch.map((searchBook) => (
                <Book
                  key={searchBook.id}
                  name={filterBook(searchBook)}
                  book={
                    bookList && bookList.length > 0
                      ? filterBook(searchBook)
                      : searchBook
                  }
                  bookSelect={bookSelect}
                />
              ))
            : ""}
        </ol>
      </div>
    </div>
  );
};

export default BookSearch;
