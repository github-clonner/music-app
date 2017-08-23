import * as artistsActions from './constants';

export const getArtists = ({ limit = 10, page = 1 } = {}) => ({
    type: artistsActions.GET_ARTISTS,
    query: {
        limit: limit,
        page: page
    }
});

export const gotArtistsSuccess = artists => ({
    type: artistsActions.GET_ARTISTS_SUCCESS,
    artists: artists
});

export const errorLoadingArtists = error => ({
    type: artistsActions.GET_ARTISTS_ERROR,
    error: error
});