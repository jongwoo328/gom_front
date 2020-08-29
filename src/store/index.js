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
		isLoggedIn(state) {
			return Boolean(state.token);
		},
	},
	mutations: {
		setToken(state, token) {
			cookies.set('auth-token', token);
			return state;
		},
		setUserData(state, userData) {
			cookies.set('userData', userData);
			return state;
		},
		removeToken() {
			cookies.remove('auth-token');
		},
		removeUserData() {
			cookies.remove('userData');
		},
	},
	actions: {
		login({ commit }, data) {
			commit('setToken', data.token);
			commit('setUserData', data.user);
		},
		logout({ commit }) {
			commit('removeToken');
			commit('removeUserData');
		},
	},
	modules: {},
});
