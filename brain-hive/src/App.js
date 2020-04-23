import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Navbar from './components/Navbar';
import INITIAL_POSTS from './mock/posts';
//this makes it so we're routing between 


class App extends Component {
  state = {
    //load initial posts
    posts: [...INITIAL_POSTS],
  };

  componentDidMount = () => {
    console.log("Mounting app.js"); 
  };

  //push new data into the array of objects in Mock.js
  //this is now a function that is a part of the root state
  addPost = (postData) => {
    postData.id = this.state.posts.length + 1;
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
          <Switch>
          <Route path="/" exact>
            <PostList posts={this.state.posts} />
          </Route>
          <Route path="/add" exact>
            <PostForm addPost={this.addPost} />
          </Route>
          <Route path="/post/:postid" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
