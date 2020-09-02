<template>
	<main class="table-body">
		<ArticleTableBodyRow
			v-for="article in articles"
			:key="article.id"
			:article="article"
		>
		</ArticleTableBodyRow>
	</main>
</template>

<script>
import ArticleTableBodyRow from './ArticleTableBodyRow.vue';

export default {
	components: {
		ArticleTableBodyRow,
	},
	props: {
		articles: Array,
	},
};
</script>

<style lang="scss"></style>
