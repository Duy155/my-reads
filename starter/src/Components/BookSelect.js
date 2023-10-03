import React from "react";

const BookSelect = (props) => {
    const { book, bookSelect } = props

    const handleBookSelect = (e) => {
        const title = e.target.value;
        bookSelect(book, title)
    }

    return (
        <select onChange={(e) => handleBookSelect(e)} defaultValue={book.shelf || 'none'} >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}

export default BookSelect;