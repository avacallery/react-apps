import {CHANGE_FORM, SUBMIT_FORM} from '../actions/types'; 

const INITIAL_STORE = {
    form: {
        id: 0,
        posterName: "",
        resourceAuthor: "",
        jobSkillLevel: "",
        cohort: "",
        title: "",
        categories: "",
        summary: "",
        link: "",
        resourceType: "",
        datePublished: null,
        videoLength: "",
        timeToComplete: "",
        raiting: "",
        comments: []
    },
    loading: false,
    errors: null
};

//a reducer always has to return an object

export default (store = INITIAL_STORE, action) => {
    switch (action.type) {
        case CHANGE_FORM:
            return {
                ...store,
                form: {
                    ...store.form,
                    [action.payload.field]: action.payload.value
                }
            }

        case SUBMIT_FORM:
            return {
                ...INITIAL_STORE
            }
        default:
            return store;
    }
}