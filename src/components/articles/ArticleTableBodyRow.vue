<template>
	<tr>
		<td class="No" scope="col" v-text="article.id"></td>
		<td class="title" scope="col">
			<router-link
				:to="{
					name: 'ArticleDetail',
					params: {
						ariticleId: article.id,
					},
				}"
			>
				{{ article.title }}
			</router-link>
		</td>
		<td class="auther" scope="col" v-text="article.user.username"></td>
		<td class="date" scope="col" v-text="articleDate"></td>
		<td class="scrap-num" scope="col" v-text="article.liked_user.length"></td>
		<td class="click-num" scope="col" v-text="hasChild"></td>
	</tr>
</template>

<script>
export default {
	props: {
		article: Object,
	},
	computed: {
		articleDate() {
			const date = new Date(this.article.created_at);
			return `${date.getUTCFullYear()}-${('0' + (date.getMonth() + 1)).slice(
				-2,
			)}-${date.getDate()}`;
		},
		hasChild() {
			if (this.article.child_articles.length) {
				return 'O';
			} else {
				return 'X';
			}
		},
	},
};
</script>

<style lang="scss">
tr {
	height: 30px;
}
</style>
