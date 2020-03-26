import React, { Component } from 'react';
import Ninjas from './Ninjas';

//root component that sits at the top of the tree 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :-)</p>
        <Ninjas />
      </div>
    );
  }
}

export default App;
