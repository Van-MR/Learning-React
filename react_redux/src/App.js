import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { Add_age, Reduce_age, Remove_item } from './store/action'


class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div>
          <p>年龄:{this.props.p_age}</p>
          <button onClick={() => { this.props.add(2) }} >Add</button>
          <button onClick={() => { this.props.decreace(1) }}>Decrese</button>
        </div>
        <hr/>
        <div>
           <h3>History</h3>
           <ul>
              {this.props.history.map(item => {
                  return (
                    <li className="item_style" key={item.id} onClick={() => this.props.delete(item.id)}>{item.age}</li>
                  )
              })}
           </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
       p_age :  state.age,
       history: state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      add: (d) => dispatch(Add_age(d)),
      decreace: (d) => dispatch(Reduce_age(d)),
      delete: (index) => dispatch(Remove_item(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
