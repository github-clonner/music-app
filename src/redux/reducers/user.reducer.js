import { userActions } from '../actions/user';

const initState = {
    currentUser: null,
    error: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case userActions.LOGIN:
            return {
                ...state,
                error: null
            };

        case userActions.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.user
            };

        case userActions.LOGIN_ERROR:
            return {
                ...state,
                error: action.error
            };

        case userActions.LOGOUT:
            return {
                ...state,
                currentUser: null
            };

        default:
            return state;
    }
};