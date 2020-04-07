import React, { Component } from 'react';
//{ } extracts component property 

import './App.css';

//turn functional component into class-based component 

//App will (inherit...extends) gain all the properties of Component 
//that's how we're going to get props/state/mounting etc 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
      </div>
    );
  }
}

export default App;
