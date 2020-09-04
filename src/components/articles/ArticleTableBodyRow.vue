<template>
	<article
		:id="`article-${article.id}`"
		:class="[
			'table-article__row',
			article.parent_article ? 'table-childArticle__row' : '',
		]"
	>
		<div class="No" scope="col">
			{{ article.parent_article ? '' : article.id }}
		</div>
		<div class="title" scope="col">
			<span v-if="article.parent_article" class="article-child__sign">
				<i class="icon ion-md-return-right"></i>
			</span>
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
	</article>
</template>

<script>
import { isSameDay } from '@/util/date.js';

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
			const now = new Date(Date.now());
			if (isSameDay(now, date)) {
				return `${date.getHours()}:${date.getMinutes()}`;
			}
			date.setMonth(date.getMonth() + 1);
			return `${('0' + date.getMonth()).slice(-2)}-${(
				'0' + date.getDate()
			).slice(-2)}`;
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
.table-childArticle__row {
	margin: 0;
	padding: 7px 0;
	background-color: rgba(34, 155, 84, 0.2);
	.article-child__sign {
		margin-right: 20px;
	}
}
</style>
