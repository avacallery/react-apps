import {CHANGE_QUERY} from '../actions/types'; 

const INITIAL_STORE = {
    //what data is normally in this store?
    list: [], 
    query: "", 
    loading: false, 
    errors: {}, 
}

export default (store = INITIAL_STORE, action) => {
    switch(action.type) {
        case CHANGE_QUERY: 
        return {
            ...store, 
            //this is how we send the action (payload)
            query: action.payload
        }
        //every reducer has to send an object of some kind (state) to keep track of the changes
        default: 
            return store; 
    }
}