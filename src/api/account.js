import { noAuth } from './index.js';

function registerUser(userData) {
	return noAuth.post('accounts/post', userData);
}
