import { combineReducers } from 'redux';

import nav from './nav.reducer';
import user from './user.reducer';
import artists from './artists.reducer';

export default combineReducers({
   nav,
   user,
   artists
});