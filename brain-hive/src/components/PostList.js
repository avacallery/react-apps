import React from 'react'; 
import Post from './Post'; 

const PostList = (props) => {
    const renderPosts = () => {
        const display = props.posts.map((post) => {
          return <Post post={post} />
        });
        return display;
      };

    return (
        <div className="postList">{renderPosts()}</div>
    );
};

export default PostList; 