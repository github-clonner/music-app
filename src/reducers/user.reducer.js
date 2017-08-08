const initState = {
    currentUser: null
};

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'auth/LOGIN':
            return {
                ...state,
                currentUser: action.user
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