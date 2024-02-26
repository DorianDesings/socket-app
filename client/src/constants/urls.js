const PORT = 3000;
const URL_BASE = `http://localhost:${PORT}/`;
const API_USERS = URL_BASE + 'api/users';
const AUTH_API = URL_BASE + 'auth';

const AUTH_LOGIN = AUTH_API + '/login';
const AUTH_REGISTER = AUTH_API + '/register';
const AUTH_VERIFY_TOKEN = AUTH_API + '/verifyToken';

export const URLS = {
	API_USERS,
	AUTH_LOGIN,
	AUTH_REGISTER,
	AUTH_VERIFY_TOKEN
};
