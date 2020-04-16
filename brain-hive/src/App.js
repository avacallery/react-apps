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
        <div className="header">
          <h1 id="brand">Welcome to BrainHive!</h1>
          <div id="navigation">
            <button> <a href="">Add Post</a></button>
          </div>
        </div>
        <div className="postList">{this.renderPosts()}</div>
      </div>
    );
  }
}

export default App;
