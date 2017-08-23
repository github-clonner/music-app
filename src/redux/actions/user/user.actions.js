import * as userActions from './constants';

export const login = ({ email, password }) => ({
    type: userActions.LOGIN,
    user: {
        email: email,
        password: password
    }
});

export const successLogin = user => ({
    type: userActions.LOGIN_SUCCESS,
    user: user
});

export const errorWithLogin = error => ({
    type: userActions.LOGIN_ERROR,
    error: error.message
});

export const logout = () => ({ type: userActions.LOGOUT });