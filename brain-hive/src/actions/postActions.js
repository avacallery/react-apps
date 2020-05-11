export const increment = (count) => dispatch => {
    //this is an action creator not an action
    dispatch({
        type: 'INCREMENT',
        payload: count + 1
    });
};