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
		path: '/:ariticleId',
		component: () => import('@/views/articles/ArticleDetailPage.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
