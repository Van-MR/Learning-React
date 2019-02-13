import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      character: {}
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          character: data
        })
      );
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  }
  render() {
    const text = this.state.isLoading
      ? "loading ..."
      : this.state.character.name;
    return (
      <div className="App">
        <h1>{text}</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
