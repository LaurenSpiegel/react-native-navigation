import {
    EMPLOYEES_FETCH_SUCCESS,
} from '../actions/types';

// we do an object for our employees rather than an array because
// firebase actually returns an object with each entry as its
// own object with an id as a key. this is useful for updating the state
// when an entry changes
const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}