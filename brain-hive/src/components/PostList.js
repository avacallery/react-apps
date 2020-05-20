import React from 'react';
import { connect } from 'react-redux';
import { increment, changeQuery } from '../actions';
import Post from './Post';

//PostList is iterating through the array of posts by using .map and displaying a new array of posts
//React will use keys in order to display posts without having to rerender the page 
//PostList display posts based on the keys selected
//PostList hands the baton of handleSelect to Post.js

const PostList = (props) => {

  const handleChange = (e) => {
    const query = e.target.value;

    props.changeQuery(query, props.posts.list);
  };

  const handleClick = () => {
   props.increment(props.posts.count);
  }

  const renderPosts = () => {
    const display = props.search.list.map((post) => {
      return <Post
        post={post}
        key={post.id}
        handleSelect={props.handleSelect} />
    });
    return display;
  };

    return (
      <div>
        <div style={myStyles.searchBar}>
          <input style={myStyles.input}
            type="text"
            placeholder="Search"
            //value is using redux to track changes
            //time travel should work
            value={props.search.query}
            onChange={handleChange}
          />
        </div>
        <div className="postList">{renderPosts()}</div>
        <div className="footer">
          <button onClick={handleClick}>increase</button>
          <p>{props.posts.count}</p>
        </div>
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
};

//PostList grabs post list data from the redux store instead of a parent through props
//this works because of connect() below
//we bring in the reducer through here (store)
//store has access to our reducer which then has access to our posts
const mapStoreToProps = (store) => {
  return {
    posts: store.posts,
    search: store.search
  };
};

const mapActionsToProps = () => {
  return {
    increment,
    changeQuery
  };
};

export default connect(mapStoreToProps, mapActionsToProps()
)(PostList); 