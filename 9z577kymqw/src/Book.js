import React, { Component } from "react";

class Book extends Component {
  render() {
    const { img, name, author } = this.props.book;
    return (
      <div className="book">
        <img src={img} alt="pics" />
        <div>
          <p style={{ color: "red" }}>{name}</p>
          <p style={{ color: "blue" }}>{author}</p>
        </div>
      </div>
    );
  }
}

export default Book;
