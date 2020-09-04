import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Articles',
		component: () => import('@/views/articles/ArticlePage.vue'),
	},
	{
		path: '/article/:articleId',
		name: 'ArticleDetail',
		component: () => import('@/views/articles/ArticleDetailPage.vue'),
	},
	{
		path: '/create',
		name: 'ArticleCreate',
		component: () => import('@/views/articles/CreateArticlePage.vue'),
	},
	{
		path: '/article/:articleId/update',
		name: 'ArticleUpdate',
		component: () => import('@/views/articles/CreateArticlePage.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
