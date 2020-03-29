const initState = {
    posts: [
        {id: '1', title: 'Stringfish was caught and donated.'}, 
        {id: '2', title: 'Peacock Butterfly was caught and donated.'}, 
        {id: '3', title: 'Pikachu has now entered the chat.'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer