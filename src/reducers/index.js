import { combineReducers } from 'redux';

import { userReducer as user } from './user.reducer';
import { artistsReducer as artists } from './artists.reducer';

export default combineReducers(
    user,
    artists
);