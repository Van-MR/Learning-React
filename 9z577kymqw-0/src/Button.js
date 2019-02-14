import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        style={{
          width: "220px",
          backgroundColor: "red",
          color: "white",
          fontSize: "1.5rem",
          cursor: "pointer"
        }}
        onClick={this.props.handleClick}
      >
        i am lower button
      </button>
    );
  }
}

export default Button;
