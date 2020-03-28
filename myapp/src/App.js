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
  addNinja = (ninja) => {
      ninja.id = Math.random(); 
      let ninjas = [...this.state.ninjas, ninja]
      this.setState({
        ninjas: ninjas
      })
  } 
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :-)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
