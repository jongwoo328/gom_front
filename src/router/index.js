import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'articles',
		component: () => import('@/views/articles/ArticlePage.vue'),
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: () => import('@/views/accounts/SignUp.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
