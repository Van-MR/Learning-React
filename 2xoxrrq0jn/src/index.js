import React from "react";
import ReactDOM from "react-dom";

import ProtoTypes from "prop-types";

import "./styles.css";

const Person = ({ img, name, age }) => {
  return (
    <div>
      <img src={img} alt="pic" width="200" />
      <h3>name:{name}</h3>
      <h3>age:{age}</h3>
    </div>
  );
};

/** Validator fot Standard Jacascript Types
 *  ProtoTypes.array
 * ProtoTypes.function
 * ProtoTypes.boolen
 * ProtoTypes.object
 * ProtoTypes.number
 * ProtoTypes.string
 */

Person.ProtoTypes = {
  img: ProtoTypes.string,
  age: ProtoTypes.number.isRequired,
  name: ProtoTypes.string.isRequired
};

class PersonList extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "bob",
          age: 25,
          img: "https://cdn-images-1.medium.com/max/800/0*bzN1I5xM8ARbEg3c"
        },
        {
          id: 2,
          name: "peter",
          age: 35,
          img: "https://cdn-images-1.medium.com/max/800/0*bzN1I5xM8ARbEg3c"
        },
        {
          id: 3,
          name: "micheal",
          age: 29,
          img: "https://cdn-images-1.medium.com/max/800/0*bzN1I5xM8ARbEg3c"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.people.map(item => (
          <Person
            key={item.id}
            name={item.name}
            img={item.img}
            age={item.age}
          />
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <PersonList name="bob" age="14" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
