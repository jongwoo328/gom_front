<template>
	<div>
		<ArticleTable :articles="articles"></ArticleTable>
		<sliding-pagination
			class="silding-bar"
			:current="currentPage"
			:total="totalPages"
			@page-change="pageChangeHandler"
		></sliding-pagination>
	</div>
</template>

<script>
import SlidingPagination from 'vue-sliding-pagination';
import ArticleTable from '@/components/articles/ArticleTable.vue';
import { fetchArticleList } from '@/api/article.js';
export default {
	components: {
		ArticleTable,
		SlidingPagination,
	},
	data() {
		return {
			currentPage: 1,
			totalPages: 10,
			articles: [],
		};
	},
	created() {
		this.pageChangeHandler(this.currentPage);
	},
	methods: {
		async getArticles() {
			try {
				const res = await fetchArticleList(this.currentPage);
				// this.articles = res.data.articles;
				const articleWithChild = Array();
				res.data.articles.forEach(article => {
					articleWithChild.push(article);
					article.child_articles.forEach(child => {
						articleWithChild.push(child);
					});
				});
				this.articles = articleWithChild;
				this.totalPages = Math.ceil(res.data.totalArticleCount / 10);
			} catch (error) {
				alert(error);
			}
		},
		pageChangeHandler(selectedPage) {
			this.currentPage = selectedPage;
			this.getArticles();
		},
	},
};
</script>

<style lang="scss"></style>
