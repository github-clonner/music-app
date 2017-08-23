import { takeLatest, takeEvery, put, call } from 'redux-saga/effects';
import { Routing } from '../../actions/app/index';
import { authApi } from '../../../api/index';

import {
    userActions,
    successLogin,
    errorWithLogin
} from '../../actions/user/index';

const authSaga = [
    takeLatest(userActions.LOGIN, loginUser),
    takeEvery(userActions.LOGOUT, logoutUser)
];

function* loginUser(loginAction) {
    try {
        const user = yield call(authApi.login, loginAction.user);
        yield put(successLogin(user));
    } catch (e) {
        yield put(errorWithLogin(e));
    }
}

function* logoutUser() {
    yield put(Routing.goToLogin());
}

export default authSaga;