export const changeForm = (field, value) => (dispatch) => {
    dispatch({
        type: 'CHANGE', 
        payload: {
            field, 
            value
        }
    });
};

export const submitForm = (data) => (dispatch) => {
    dispatch({
        type: 'SUBMIT_FORM'
    });
};