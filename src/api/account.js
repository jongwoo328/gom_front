import { noAuth } from './index.js';

export function registerUser(userData) {
	return noAuth.post('accounts/signup/', userData);
}

export function login(userData) {
	return noAuth.post('accounts/login/', userData);
}

export function verifyUsername(userData) {
	return noAuth.post('accounts/verify/username/', userData);
}

export function verifyEmail(userData) {
	return noAuth.post('accounts/verify/email/', userData);
}
