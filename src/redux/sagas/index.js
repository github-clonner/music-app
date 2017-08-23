import { all } from 'redux-saga/effects';

import artistsSaga from './artists';
import userSaga from './user';

export default function* rootSaga() {
    yield all([
        ...artistsSaga,
        ...userSaga
    ])
}