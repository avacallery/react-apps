import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

//root component that sits at the top of the tree 
//parent component
class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 }, 
      { name: 'Ava', age: 25, belt: 'green', id: 2 },
      { name: 'Ody', age: 7, belt: 'black', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :-)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
