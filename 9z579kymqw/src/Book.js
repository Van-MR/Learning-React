import React, { Component } from "react";
class Book extends Component {
  constructor() {
    super();
  }

  render() {
    const { id, img, name, author } = this.props.book;
    const { deleteItem } = this.props;
    return (
      <div className="book">
        <img src={img} alt="pics" />
        <div>
          <p style={{ color: "red" }}>{name}</p>
          <p style={{ color: "blue" }}>{author}</p>
          <button onClick={() => deleteItem(id)}>delete</button>
        </div>
      </div>
    );
  }
}

export default Book;
