import React, { Component } from 'react';
import Post from './Post';

//the whole functional component is basically a render method 
//PostList has a function (renderPosts) inside of a function

//PostList is iterating through the array of posts by using .map and displaying a new array of posts
//React will use keys in order to display posts without having to rerender the page 
//PostList display posts based on the keys selected
//PostList hands the baton of handleSelect to Post.js

class PostList extends Component {

  state = {
    //state always needs to maintain the original posts
    query: "",
    filteredPosts: [...this.props.posts],
  };

  handleChange = (e) => {
    //pull updated text
    const query = e.target.value;

    const newPosts = this.props.posts.filter((post) => {
      //test to see if value is part of the title
      if (post.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        return true;
      }
      //another condition
      if (post.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        return true;
      }
        return false;
    });

    this.setState({
      query: query, 
      filteredPosts: newPosts,
    })
  }

  renderPosts = () => {
    const display = this.state.filteredPosts.map((post) => {
      return <Post
        post={post}
        key={post.id}
        handleSelect={this.props.handleSelect} />
    });
    return display;
  };

  render() {
    return (
      <div>
        {/* TODO: add searchbar  */}
        <div style={myStyles.searchBar}>
          <input style={myStyles.input}
            type="text"
            placeholder="Search"
            onChange={this.handleChange}
            />
        </div>
        <div className="postList">{this.renderPosts()}</div>
      </div>
    );
  };
};

const myStyles = {
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '30%',
    marginRight: '30%',
    marginBottom: 16,
    height: 32
  },
  input: {
    width: "70%",
    height: 32,
    fontSize: 20,
    marginBottom: 4,
  }
}

export default PostList; 