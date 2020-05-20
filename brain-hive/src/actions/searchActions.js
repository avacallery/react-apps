//these are the actions that will most effect the searchReducer
//if anything goes wrong with the search function, it will probably be here or in searchReducers

import { CHANGE_QUERY } from './types';

export const changeQuery = (query, postList) =>
    (dispatch) => {

        const newPosts = postList.filter(
            (post) =>
                post.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
                ||
                post.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0
        )

        dispatch({
            type: CHANGE_QUERY,
            payload: {
                query,
                list: newPosts
            }
        });
    }