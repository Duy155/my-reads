import React from "react";
import Book from "./Book";

const BookShelf = (props) => {
  const { bookList, bookSelect, bookShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList.map((book) => (
            <li key={book.id}>
              <Book book={book} bookSelect={bookSelect} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
