const initState = {
    currentUser: null,
    error: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'auth/LOGIN':
            return {
                ...state,
                error: null
            };

        case 'auth/LOGIN_SUCCESS':
            return {
                ...state,
                currentUser: action.user
            };

        case 'auth/LOGIN_ERROR':
            return {
                ...state,
                error: action.error
            };

        case 'auth/LOGOUT':
            return {
                ...state,
                currentUser: null
            };

        default:
            return state;
    }
};