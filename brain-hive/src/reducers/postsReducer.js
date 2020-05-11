import posts from '../mock/posts'; 

const INITIAL_STATE = {
    //list initial posts
    list: [...posts],
    loading: false,
    errors: {}, 
    count: 0,
}

export default (state = INITIAL_STATE, action) => {
    //create switch statement on whatever the action is
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state, 
                count: action.payload
            };
        default: 
        return state; 
    }
}