import React, { Component } from 'react';
import './App.css';
import Component1 from './componets/component1';
import Component2 from './componets/component2';
import Component3 from './componets/component3';

import { animated,Transition } from 'react-spring/renderprops';

class App extends Component {
 state = {
   showComponent3:false
 }

handleClick = e => {
  e.preventDefault();
  this.setState({
    showComponent3:!this.state.showComponent3
  })
}
  render() {
    return (
      <div className="App">
         <Component1 handleClick={this.handleClick}/>
         <Component2 />
         <Transition
            native
            items={this.state.showComponent3}
            from = {{opacity:0}}
            enter = {{opacity:1}}
            leave = {{opacity:0}}
         >
           {show => show && ( props => (
             <animated.div style={props}>
                <Component3 />
             </animated.div>
           ))}
         </Transition>
         <Component3 />
      </div>
    );
  }
}

export default App;
