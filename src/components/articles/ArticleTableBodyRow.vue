<template>
	<article :id="`article-${article.id}`" class="table-article__row">
		<div class="No" scope="col" v-text="article.id"></div>
		<div class="title" scope="col">
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
		</div>
		<div class="auther" scope="col" v-text="article.user.username"></div>
		<div class="date" scope="col" v-text="articleDate"></div>
		<div class="scrap-num" scope="col" v-text="article.liked_user.length"></div>
		<!-- <div
			class="click-num"
			scope="col"
			v-text="hasChild"
			@click="showChild = !showChild"
		></div> -->
		<!-- <div style="position: relative;" v-if="showChild">
			<div v-if="article.child_articles.length" style="position: absolute;">
				<ul style=" border: 1px solid green">
					<li v-for="article in article.child_articles" :key="article.id">
						{{ article.title }}
					</li>
				</ul>
			</div>
		</div> -->
	</article>
</template>

<script>
export default {
	props: {
		article: Object,
	},
	data() {
		return {
			showChild: false,
		};
	},
	computed: {
		articleDate() {
			const date = new Date(this.article.created_at);
			return `${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`;
		},
		hasChild() {
			if (this.article.child_articles.length) {
				return 'O';
			}
			return 'X';
		},
	},
	methods: {},
};
</script>

<style lang="scss">
.table-article__row {
	display: flex;
	flex-direction: row;
	text-align: center;
	margin: 15px 0;
	.title {
		text-align: left;
	}
	.title,
	.auther {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}
</style>
