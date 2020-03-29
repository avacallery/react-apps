const initState = {
    posts: [
        {id: '1', title: 'Stringfish was caught and donated.', body: 'You caught this fish -- now what?'}, 
        {id: '2', title: 'Peacock Butterfly was caught and donated.', body: 'This butterfly is unknown to man -- until now!'}, 
        {id: '3', title: 'Pikachu has now entered the chat.', body: 'Is he a cat? Or a mouse? Who cares, he will be here to speak with us today.'}
    ]
}

//filter() performs a function on each individual post, and if we return true for that function, then we return it in the new array. If it returns false, we filter it out of the new array.

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        //return new object that represents the new state
        return {
        //take current state and spread so all the properties in the state are returned in this object first
        // then we override posts with newPosts
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer