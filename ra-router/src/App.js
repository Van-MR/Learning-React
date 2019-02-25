import React, { Component } from 'react';
import { BrowserRouter , Route , Switch }  from 'react-router-dom';

import NavBar from './components/Navbar';

import Home from './components/Home';
import About from './components/About';
import Details from './components/Detail';
import Contact from './components/Contact';
import Default from './components/Default';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div>
           <NavBar />
           <Switch>
             <Route  exact path="/" component={Home}></Route>
             <Route  path="/about" component={About}></Route>
             <Route  path="/detail" component={Details}></Route>
             <Route  path="/contact" component={Contact}></Route>
             <Route  component={Default}></Route>
           </Switch>
         </div>
      </BrowserRouter>
    );
  }
}

export default App;
