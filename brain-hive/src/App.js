import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ViewPost from './components/ViewPost';
import Navbar from './components/Navbar';
import INITIAL_POSTS from './mock/posts';

//App maintains what Post is being viewed (which Post has been selected? What should I display?)
class App extends Component {
  //"global" state without redux 
  //state of the app - what is selected
  state = {
    //load initial posts
    posts: [...INITIAL_POSTS],
    selected: 1,
  };

  componentDidMount = () => {
    console.log("Mounting app.js");
  };

  //push postData into the array of objects in Mock.js
  //addPost is now a function that is a part of the root state
  addPost = (postData) => {
    //get the last index in the array
    postData.id = this.state.posts[this.state.posts.length - 1].id + 1;
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

  //App.js maintains the state by using our routing system and deciding where to go based on what is selected
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <PostList
                  posts={this.state.posts}
                  handleSelect={this.handleSelect} />
              </Route>
              <Route path="/add" exact>
                <PostForm
                  addPost={this.addPost} />
              </Route>
              <Route path="/post/:postId">
                <ViewPost
                  post={this.state.posts[this.state.selected - 1]} />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
