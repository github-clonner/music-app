const initState = {
    artists: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'artists/GET_ARTISTS_SUCCESS':
            return {
                ...state,
                artists: action.artists
            };

        default:
            return state;
    }
};