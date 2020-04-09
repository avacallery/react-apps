import React from 'react';

//no render method in a functional component

const Post = ({post}) => {
    return (
        <div className={'box'}>
            <h2>{post.title}</h2>
            <p>{post.resourceAuthor}</p>
            {   post.videoLength ? (<p>Length: {post.videolength}</p>) 
                : null
            }
            <p>Rating: {post.rating}</p>
            <p>Comments: {post.comments.length}</p>
        </div>
    )
}

export default Post;