import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
} from '../actions/types';


const INITIAL_STATE = { 
    email: '',
    pasword: '',
    user: null,
    error: '',
    loading: false,
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            // need brand new object so redux knows the state changed
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        case LOGIN_USER_SUCCESS:
            // take state object, overlay it with initial state and add user
            // basically -- clear out email, password, error and loading
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        default:
            return state;
    }
}