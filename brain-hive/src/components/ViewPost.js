import React from 'react';
import { useParams } from 'react-router-dom';

const ViewPost = (props) => {
    //extract postid from parameter
    const { postId } = useParams(); 
    const { post } = props; 

    return(
        <div className="selectedPost">
        <h1>{post.title}</h1>
        <h2>{post.resourceAuthor}</h2>
        <h4>Submitted by: {post.posterName}, Cohort: {post.cohort}</h4>
        <h4>Rating: {post.rating}</h4>
        <i>"{post.summary}"</i>
        <p>Time to complete: {post.timeToComplete} minutes</p>
        <a href={post.link}>Click to view article.</a>
        </div>
    )
    //.map you will use to display comments
};

export default ViewPost; 