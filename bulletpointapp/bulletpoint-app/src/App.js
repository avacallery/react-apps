import React, { Component } from 'react';
import Bulletpoints from './Bulletpoint';
import AddBulletpoint from './AddBulletpoint'

class App extends Component {
  state = {
    bulletpoints: [
      { content: 'play animal crossing' },
      { content: 'go grocery shopping' },
      { content: 'make a pizza' }
    ]
  }
  addBulletpoint = (bulletpoint) => {
    let bulletpoints = [...this.state.bulletpoints, bulletpoint]
    this.setState({
      bulletpoints: bulletpoints
    })
  }
  render() {
    return (
    <div className="App">
      <h2 className="center green-text">Welcome to my bulletpoint list page!</h2>
      <Bulletpoints bulletpoints={this.state.bulletpoints} />
      <AddBulletpoint addBulletpoint={this.addBulletpoint} />

    </div>
  );
}
}

export default App;
