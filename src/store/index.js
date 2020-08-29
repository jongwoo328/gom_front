import Vue from 'vue';
import Vuex from 'vuex';
import cookies from 'vue-cookies';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userData: cookies.isKey('userData') ? cookies.get('userData') : null,
		token: cookies.isKey('auth-token') ? cookies.get('auth-token') : null,
	},
	getters: {
		getToken(state) {
			return state.token;
		},
		getUserData(state) {
			return state.userData;
		},
	},
	mutations: {},
	actions: {},
	modules: {},
});
