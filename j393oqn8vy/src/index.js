import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Conditional from "./conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  //methods

  static getDerividFromProps() {
    //return new ,updated state base upon props
  }

  // getSnapshotBeforeUpdate() {
  //   //created a backup of the curuent way thinf are
  // }

  //lifecycle

  componentWillMount() {
    //teardown or cleanup your code  before your componet disappear
    //(e.g remover event listener)
  }

  componentDidMount() {
    //get the data i need to corect dispaly
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.whatever != this.props.whatever) {
      //do somethinf here
    }
  }

  shuldComponentUpdate(nextProps, nextState) {
    //return true if want to update
    //return false if not
  }

  componentWillUpdate() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
