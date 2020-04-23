import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

  componentDidMount = () => {
    console.log("Mounting app.js"); 
    this.setState({ posts: [...posts] })
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
          <Switch>
          <Route path="/" exact>
            <PostList posts={this.state.posts} />
          </Route>
          <Route path="/add" exact>
            <PostForm addPost={this.addPost} />
          </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
