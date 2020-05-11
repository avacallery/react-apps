//if we have multiple reducers we store them here before we import into the Store
//combine reducers into one item (as far as redux is concerned)

//THIS IS OUR STORE!!!

import {combineReducers} from 'redux'; 
import postsReducer from './postsReducer';

export default combineReducers({
    //an object that gives each reducer a key
    posts: postsReducer
})