import React from 'react';
import { useParams } from 'react-router-dom';

const ViewPost = (props) => {
    //extract postid from parameter
    const { postId } = useParams(); 
    const { post } = props; 

    return(
        <h2>{post.title}</h2>
    )
};

export default ViewPost; 