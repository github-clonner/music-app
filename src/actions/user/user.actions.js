import { takeLatest, put, call } from 'redux-saga/effects';
import { authApi } from '../../api';

const authSaga = [
    takeLatest('auth/LOGIN', loginUser)
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

export default authSaga;