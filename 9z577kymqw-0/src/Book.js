import React, { Component } from "react";
import Button from "./Button";
class Book extends Component {
  constructor() {
    super();
  }

  render() {
    const { img, name, author } = this.props.book;
    const { handleClick } = this.props;
    console.log(handleClick);
    return (
      <div className="book">
        <img src={img} alt="pics" />
        <div>
          <p style={{ color: "red" }}>{name}</p>
          <p style={{ color: "blue" }}>{author}</p>
          <Button handleClick={handleClick} />
        </div>
      </div>
    );
  }
}

export default Book;
