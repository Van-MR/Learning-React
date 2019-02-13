import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "male",
      distination: "",
      isVegant: false,
      isHugor: false,
      isKosher: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="firstName"
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="lasttName"
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="age"
          />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
              checked={this.state.gender === "male"}
            />
            male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
              checked={this.state.gender === "male"}
            />
            female
          </label>
          <select
            name="distination"
            value={this.state.distination}
            onChange={this.handleChange}
          >
            <option value="">pleae select</option>
            <option value="germany">germany</option>
            <option value="chinese">chinese</option>
            <option value="korean">korean</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegant"
              onChange={this.handleChange}
              checked={this.state.isVegant}
            />
            isVegant?
          </label>
          <label>
            <input
              type="checkbox"
              name="isHugor"
              onChange={this.handleChange}
              checked={this.state.isHugor}
            />
            isHugor?
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />
            isKosher?
          </label>
          <button>Submit</button>
        </form>
        <hr />
        <h2>enterde information</h2>
        <p>
          your name {this.state.firstName} {this.state.lastName}
        </p>
        <p>your age {this.state.age}</p>
        <p>your gender {this.state.gender}</p>
        <p>your distination {this.state.distination}</p>
        <div>
          <h3>your dietary retirction </h3>
          <p> Vegant: {this.state.isVegant ? "yes" : "no"}</p>
          <p> Hugor: {this.state.isHugor ? "yes" : "no"}</p>
          <p> Kosher: {this.state.isKosher ? "yes" : "no"}</p>
        </div>
      </main>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
