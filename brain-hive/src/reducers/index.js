//if we have multiple reducers we store them here before we import into the Store
//combine reducers into one item (as far as redux is concerned)

//THIS IS OUR STORE!!!

//combine our reducers into one store
import {combineReducers} from 'redux'; 
import postsReducer from './postsReducer';
import addPostReducer from './addPostReducer';

export default combineReducers({
    //an object that gives each reducer a key
    posts: postsReducer,
    newPost: addPostReducer
})