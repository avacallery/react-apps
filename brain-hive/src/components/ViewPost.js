import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ViewPost extends Component {
    state = {
        showComments: false
    }
    render() {
        // const props = this.props; 
        //extract postid from parameter
        // const { postId } = this.props.match.params; 
        const  { post } = this.props;
        return(
            //react is only looking for one parent tag (div in this case)
            //the rest of the tags (h1, h2, p) all are children
            <div className="selectedPost">
            <h1>{post.title}</h1>
            <h2>{post.resourceAuthor}</h2>
            <h4>Submitted by: {post.posterName}, Cohort: {post.cohort}</h4>
            <h4>Rating: {post.rating}</h4>
            <i>"{post.summary}"</i>
            <p>Time to complete: {post.timeToComplete} minutes</p>
            <a href={`http://${post.link}`}>Click to view article.</a>
            </div>
        );
    }
    //.map you will use to display comments
};

export default withRouter(ViewPost); 