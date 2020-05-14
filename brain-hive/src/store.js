import {createStore, applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk'; 
import reducers from './reducers'; 

//react is using the store as global state

const INITIAL_STATE = {}; 

//compose composes the middleware and combines into a single object so the store can utilize it
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [thunk];

const store = createStore(
    reducers,
    INITIAL_STATE, 
    composeEnhancers(applyMiddleware(...middleware))
    //we put our middleware in an array,
    //dynamically, how do we get this list to display as separate entities?
    //the spread operator (...middleware) does this 
);

export default store; 