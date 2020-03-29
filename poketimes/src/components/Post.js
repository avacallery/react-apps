//class based component

import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return(
            <div className="container">
                { post }
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

export default connect(mapStateToProps)(Post)