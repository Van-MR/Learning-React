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

  handleClick() {
    console.log("i am information from the parent container");
  }

  render() {
    const example = this.state.books.map(book => (
      <Book book={book} key={book.id} handleClick={this.handleClick} />
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
