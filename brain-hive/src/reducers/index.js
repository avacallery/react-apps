//if we have multiple reducers we store them here before we import into the Store
//combine reducers into one item (as far as redux is concerned)

//THIS IS OUR STORE!!!

//combine our reducers into one store
import {combineReducers} from 'redux'; 
import postsReducer from './postsReducer';
import addPostReducer from './addPostReducer';
import searchReducer from './searchReducer'; 

export default combineReducers({
    //an object that gives each reducer a key
    //each reducer handles different things
    //we can give whatever key we want to our reducers!
    posts: postsReducer,
    newPost: addPostReducer,
    search: searchReducer
})