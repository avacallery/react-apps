import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './common/Button';

class ViewPost extends Component {
    state = {
        showComments: false
    }

    clickHandler = () => {
        this.setState({
            showComments: !this.state.showComments,
        });
    }

    renderComments = (post) => {
        return post.comments.map((comment) => {
            return (
                <div className="box">
                    <p>{comment.commenter}</p>
                    <p>{comment.text}</p>
                </div>
            );
        });
    };

    render() {
        // const props = this.props; 
        //extract postid from parameter
        // const { postId } = this.props.match.params; 
        const { post } = this.props;
        return (
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
                <br></br>
                <Button onClick={this.clickHandler}>
                    {this.state.showComments ? "Hide Comments" : "Show Comments"}
                    </Button>
            </div>
        );
    }
    //.map you will use to display comments
}


export default withRouter(ViewPost); 