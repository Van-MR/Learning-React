import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';
import Header from './layout/Header';
import AddTodo from './components/AddTodo'
import Todos from './components/Todo';
import About from './pages/About';
import uuid from 'uuid'

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'coding saturday night',
        complete:false
      },
      {
        id:2,
        title:'go out do sport thity minutes',
        complete:true
      },
      {
        id:3,
        title:'have a dating with some old friends',
        complete:true
      }
    ]
  }


markComplete =  id => {
    let temp = this.state.todos.map(item => {
      if(item.id === id){
         item.complete = !item.complete;
      }
      return item;
    })

    this.setState({
      todos:temp
    })
}

addItem = title => {
    let item = {
        id:uuid(),
        title:title,
        complete:false
    }

    let temTodos = [...this.state.todos,item];

    console.log(temTodos);

    this.setState({
      todos:temTodos
    })
}

deleteItem = id => {
   let filterData = this.state.todos.filter(item => item.id !== id);

   this.setState({
     todos:filterData
   })
}


  render() {
    return (
      <Router>
     <div className="App">
       <div className="container">
         <Header />
         <Route exact path="/" render={props => (
           <React.Fragment>
             <AddTodo addItem={this.addItem} />
             <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
           </React.Fragment>
         )} />
         <Route path="/about" component={About} />
       </div>
     </div>
   </Router>
    );
  }
}

export default App;
