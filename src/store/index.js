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
			return !!state.token;
		},
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
		},
		setUserData(state, userData) {
			state.userData = userData;
		},
		removeToken(state) {
			state.token = null;
		},
		removeUserData(state) {
			state.token = null;
		},
	},
	actions: {
		login({ commit }, data) {
			cookies.set('auth-token', data.token);
			cookies.set('userData', data.user);
			commit('setToken', data.token);
			commit('setUserData', data.user);
		},
		logout({ commit }) {
			cookies.remove('auth-token');
			cookies.remove('userData');
			commit('removeToken');
			commit('removeUserData');
		},
	},
	modules: {},
});
