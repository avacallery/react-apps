import React, { Component } from 'react';
import Bulletpoints from './Bulletpoint';
import AddBulletpoint from './AddBulletpoint'

class App extends Component {
  state = {
    bulletpoints: [
      { id: 1, content: '* play animal crossing' },
      { id: 2, content: '* go grocery shopping' },
      { id: 3, content: '* make a pizza' }
    ]
  }
  addBulletpoint = (bulletpoint) => {
    bulletpoint.id = Math.random(); 
    let bulletpoints = [...this.state.bulletpoints, bulletpoint]
    this.setState({
      bulletpoints: bulletpoints
    })
  }
  render() {
    return (
    <div className="App">
      <h2 className="center green-text">Welcome to my Bullet Point page!</h2>
      <Bulletpoints bulletpoints={this.state.bulletpoints} />
      <AddBulletpoint addBulletpoint={this.addBulletpoint} />

    </div>
  );
}
}

export default App;
