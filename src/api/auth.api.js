import { auth } from '../config';

class AuthApi {
    login({ email, password }) {
        return new Promise((resolve, reject) => {
            const user = auth.users.find(user => user.email === email);

            if (user) {
                if (user.password === password) {
                    resolve(user);
                } else {
                    reject({ error: true, code: 401, message: 'Invalid password' });
                }
            } else {
                reject({ error: true, code: 404, message: 'User does not exist' });
            }
        });
    }
}

export const authApi = new AuthApi();