import { call, put, takeLatest } from 'redux-saga/effects';
import { musicApi } from '../../api';
import { Artist } from '../../models/Artist';

const artistsSaga = [
    takeLatest('artists/GET_ARTISTS', fetchArtists)
];

// Actions Creators

export const getArtists = ({ limit = 10, page = 1 }) => ({
    type: 'artists/GET_ARTISTS',
    query: {
        limit: limit,
        page: page
    }
});

// Action Handlers

function* fetchArtists(action) {
    try {
        let artists = yield call(musicApi.getArtists, action.query);
            artists = artists.map(artist => Artist(artist));

        console.log(artists);

        yield put({ type: 'artists/GET_ARTISTS_SUCCESS', artists: artists });
    } catch (e) {
        yield put({ type: 'artists/GET_ARTISTS_ERROR', error: e });
    }
}

export default artistsSaga;