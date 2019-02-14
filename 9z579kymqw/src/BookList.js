import React, { Component } from "react";
import Book from "./Book";
import BooksData from "./BooksData";

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: BooksData
    };
    //可以使用箭头函数 绑定this
    // this.filterData = this.filterData.bind(this);
  }

  filterData = id => {
    const sortdatas = this.state.books.filter(item => item.id !== id);

    this.setState({
      books: sortdatas
    });
  };

  render() {
    const example = this.state.books.map(book => (
      <Book book={book} key={book.id} deleteItem={this.filterData} />
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
