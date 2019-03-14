import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { Add_age, Reduce_age } from './store/action'


class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div>
          <p>年龄:{this.props.p_age}</p>
          <button onClick={() => { this.props.add(5) }} >Add</button>
          <button onClick={() => { this.props.decreace(2) }}>Decrese</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
       p_age :  state.age
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      add: (d) => dispatch(Add_age(d)),
      decreace: (d) => dispatch(Reduce_age(d))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
