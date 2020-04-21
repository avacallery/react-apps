import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; 
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Navbar from './components/Navbar';
import posts from './mock/posts';
//this makes it so we're routing between 


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

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar /> 
          <PostList posts={this.state.posts}/> 
          <PostForm addPost={this.addPost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
