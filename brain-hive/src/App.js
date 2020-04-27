import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ViewPost from './components/ViewPost';
import Navbar from './components/Navbar';
import INITIAL_POSTS from './mock/posts';
//this makes it so we're routing between 


class App extends Component {
  //"global" state without redux
  state = {
    //load initial posts
    posts: [...INITIAL_POSTS],
    selected: 1,
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
      ...this.state,
        posts: [...this.state.posts,
        postData],
    });
  };

  handleSelect = (id) => {
    console.log("Click", id); 
    this.setState({
      ...this.state,
      selected: id
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route path="/" exact>
            <PostList posts={this.state.posts} 
              handleSelect={this.handleSelect} />
          </Route>
          <Route path="/add" exact>
            <PostForm addPost={this.addPost} />
          </Route>
          <Route path="/post/:postId">
          <ViewPost post={this.state.posts[this.state.selected - 1]}/>
          </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
