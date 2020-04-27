import React from 'react'; 
import Post from './Post'; 

//the whole functional component is basically a render method 
//PostList has a function (renderPosts) inside of a function

//PostList is iterating through the array of posts by using .map and displaying a new array of posts

const PostList = (props) => {
    const renderPosts = () => {
        const display = props.posts.map((post) => {
          return <Post 
            post={post} 
            key={post.id}
            handleSelect={props.handleSelect}/>
        });
        return display;
      };

    return (
        <div className="postList">{renderPosts()}</div>
    );
};

export default PostList; 