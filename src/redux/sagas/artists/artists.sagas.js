import { takeLatest, put, call } from 'redux-saga/effects';
import { musicApi } from '../../../api/index';
import { Artist } from '../../../models/Artist/index';

import {
    artistsActions,
    gotArtistsSuccess,
    errorLoadingArtists
} from '../../actions/artists/index';

const artistsSaga = [
    takeLatest(artistsActions.GET_ARTISTS, fetchArtists)
];

function* fetchArtists(action) {
    try {
        let artists = yield call(musicApi.getArtists, action.query);
            artists = artists.map(artist => Artist(artist));

        yield put(gotArtistsSuccess(artists));
    } catch (e) {
        yield put(errorLoadingArtists(e));
    }
}

export default artistsSaga;