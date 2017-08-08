import { authApi } from '../../api';

export const login = (email, password) => ({
    type: 'auth/LOGIN',
    user: {
        email: email,
        password: password
    }
});

export const logout = () => ({ type: 'auth/LOGOUT' });

const handleLogin = loginAction => {
    authApi.login(loginAction.user);
};

