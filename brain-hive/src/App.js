import React, { Component } from 'react';
import Post from './components/Post'
import './App.css';
import posts from './mock/posts';
import PostForm from './components/PostForm';

class App extends Component {
  state = {
    //load initial posts
    posts: [...posts],
  };

  //push new data into the array of objects in Mock.js
  //this is now a function that is a part of the root state
  addPost = (postData) => {
    console.log("hello", postData); 
    this.setState({
      posts: [...this.state.posts, 
      postData],
    });
  };

  renderPosts = () => {
    const display = this.state.posts.map((post) => {
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
        <PostForm addPost={this.addPost} />
      </div>
    );
  }
}

export default App;
