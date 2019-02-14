import React, { Component } from "react";
import Book from "./Book";
import BooksData from "./BooksData";

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: BooksData
    };
  }

  render() {
    const example = this.state.books.map(book => (
      <Book book={book} key={book.id} />
    ));
    return (
      <div>
        <h3 style={{ color: "bluesky" }}>
          best selling programing Books this month
        </h3>
        {example}
      </div>
    );
  }
}

export default BookList;
