import React, { Component } from 'react';
import Ninjas from './Ninjas';

//root component that sits at the top of the tree 
//parent component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :-)</p>
        <Ninjas name="Ryu" age="25" belt="black"/>
        <Ninjas name="Ava" age="25" belt="brown"/>
      </div>
    );
  }
}

export default App;
