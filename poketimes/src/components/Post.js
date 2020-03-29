//class based component

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        //redirect the user to Home
        this.props.history.push('/');
    }
    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn blue" onClick={this.handleClick}>
                        Delete Post</button>
                </div>
            </div>
        ) : (
                <div className="center">Loading post...</div>
            )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

//ownProps refers to the props of this Post component before we attach the props from the redux store
const mapStateToProps = (state, ownProps) => {
    //this is where we get the info for the route params
    let id = ownProps.match.params.post_id;
    return {
        //this will cycle through the posts on the id object and if the id matches it will return that post
        //we've attached the post object to the props 
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    //we're mapping dispatch to props
    return {
        //this function takes parameter (the id of the post we want to delete)
        // id: id is the payload we want to send, aka the id we pass through
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}


    export default connect(mapStateToProps, mapDispatchToProps)(Post)