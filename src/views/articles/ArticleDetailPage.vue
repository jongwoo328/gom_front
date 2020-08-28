<template>
	<section class="aritlce-container container">
		<header class="article-header">
			<h1>가나다라마바사</h1>
			<p>황영준 | 2018.08.08 15:15 | 조회 20</p>
		</header>
	</section>
</template>

<script>
export default {
	props: {
		article: Object,
	},
};
</script>

<style lang="scss" scoped>
.article-container {
	.article-header {
		display: flex;
		flex-direction: column;
	}
}
</style>
