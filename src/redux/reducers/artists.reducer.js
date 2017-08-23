import { artistsActions } from '../actions/artists';

const initState = {
    artists: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case artistsActions.GET_ARTISTS_SUCCESS:
            return {
                ...state,
                artists: action.artists
            };

        default:
            return state;
    }
};