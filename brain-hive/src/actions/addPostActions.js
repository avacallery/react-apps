export const changeForm = (field, value) => (dispatch) => {
    dispatch({
        type: 'CHANGE', 
        payload: {
            field, 
            value
        }
    });
};