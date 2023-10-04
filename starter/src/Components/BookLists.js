import React, { useEffect, useState, useCallback } from "react";
import BookShelf from "./BookShelf";
import { getAll, update } from "../Service/BooksAPI";

const BookLists = () => {
  /**
   * @description This state is to store the book list
   */
  const [bookList, allListBook] = useState([]);

  /**
   * @description This variable is to store the shelf list
   */
  const shelfInfo = [
    {
      id: "currentlyReading",
      title: "Currently Reading",
    },
    {
      id: "wantToRead",
      title: "Want to Read",
    },
    {
      id: "read",
      title: "Read",
    },
  ];

  /**
   * @description This function is used to get the list of books from the server
   */
  const fetchAllBooks = () => {
    getAll().then((books) => {
      allListBook(books);
    });
  };

  /**
   * @description This function is used to filter books by bookshelf
   * @param {String} bookShelf - The name of bookshelf to filter
   */
  const filterBookByShelf = (bookShelf) => {
    return bookList.filter((book) => book.shelf === bookShelf.id);
  };

  /**
   * @description This function is used to process selected shelf books
   * @param {Object} book - Books want to update the bookshelf
   * @param {String} bookShelf - The name of the bookshelf you want to update
   */
  const bookSelect = useCallback((book, bookShelf) => {
    update(book, bookShelf).then(() => {
      fetchAllBooks();
    });
  }, []);

  /**
   * @description This function is used to get data when the component first renders
   */
  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className='list-books-content'>
      <div>
        {shelfInfo.map((shelf) => (
          <BookShelf
            key={shelf.id}
            bookList={filterBookByShelf(shelf)}
            bookSelect={bookSelect}
            bookShelf={shelf}           
          />
        ))}
      </div>
    </div>
  );
};

export default BookLists;
