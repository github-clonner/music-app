import { takeLatest, takeEvery, put, call } from 'redux-saga/effects';
import { Routing } from '../app';
import { authApi } from '../../api';

const authSaga = [
    takeLatest('auth/LOGIN', loginUser),
    takeEvery('auth/LOGOUT', logoutUser)
];

// Action Creators

export const login = ({ email, password }) => ({
    type: 'auth/LOGIN',
    user: {
        email: email,
        password: password
    }
});

export const logout = () => ({ type: 'auth/LOGOUT' });

// Actions Handlers

function* loginUser(loginAction) {
    try {
        const user = yield call(authApi.login, loginAction.user);
        yield put({ type: 'auth/LOGIN_SUCCESS', user: user });
    } catch (e) {
        yield put({ type: 'auth/LOGIN_ERROR', error: e.message });
    }
}

function* logoutUser(logoutAction) {
    yield put(Routing.goToLogin());
}

export default authSaga;