import React, { Component } from "react";
class Book extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
    this.showInfo = this.showInfo.bind(this);
  }
  //JSX conditons
  /**
   * ①三元表达式
   * this.statet.show ? 1 :  2
   * ②if ekse 判断
   * if(){
   * }else{
   * }
   * && 逻辑运算(短路逻辑  取假运算)
   * his.statet.show && 1
   *
   */

  showInfo() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const { img, name, author } = this.props.book;
    const { deleteItem } = this.props;
    return (
      <div className="book">
        <img src={img} alt="pics" />
        <div>
          <p style={{ color: "red" }}>{name}</p>
          <p style={{ color: "blue" }}>{author}</p>
          <button onClick={deleteItem}>delete</button>
          <button onClick={this.showInfo}>show info?</button>
          {this.state.show && (
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Book;
