import React, { Component } from 'react';
import Post from './components/Post'
import './App.css';
import posts from './mock/posts';

class App extends Component {

  renderPosts = () => {
    const display = posts.map(post => {
      //importing prop from Post component and reassigning
      return <Post post={post} />
    })
    return display;
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
