import React from 'react';
import Post from './Post';

//the whole functional component is basically a render method 
//PostList has a function (renderPosts) inside of a function

//PostList is iterating through the array of posts by using .map and displaying a new array of posts
//React will use keys in order to display posts without having to rerender the page 
//PostList display posts based on the keys selected
//PostList hands the baton of handleSelect to Post.js

const PostList = (props) => {
  const renderPosts = () => {
    const display = props.posts.map((post) => {
      return <Post
        post={post}
        key={post.id}
        handleSelect={props.handleSelect} />
    });
    return display;
  };

  return (
    <div>
      {/* TODO: add searchbar  */}
      <div style={myStyles.searchBar}>
        <input style={myStyles.input} type="text" placeholder="Search"></input>
        </div>
      <div className="postList">{renderPosts()}</div>
    </div>
  );
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