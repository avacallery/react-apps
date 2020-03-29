const initState = {
    posts: [
        {id: '1', title: 'Stringfish was caught and donated.', body: 'You caught this fish -- now what?'}, 
        {id: '2', title: 'Peacock Butterfly was caught and donated.', body: 'This butterfly is unknown to man -- until now!'}, 
        {id: '3', title: 'Pikachu has now entered the chat.', body: 'Is he a cat? Or a mouse? Who cares, he will be here to speak with us today.'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer