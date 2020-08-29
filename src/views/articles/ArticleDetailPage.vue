<template>
	<section class="container">
		<section class="aritcle-container">
			<header class="article-header">
				<h1>{{ articleData.title }}</h1>
				<p>{{ articleData.auther }} | {{ articleData.data }}</p>
				<span class="article-header-underline"></span>
			</header>
			<article class="article-body">
				{{ articleData.content }}
			</article>
			<section class="bookmark-box">
				<p><i class="icon ion-md-bookmark"></i></p>
				<p>23</p>
			</section>
		</section>
		<div class="comment-container">
			<span class="comment-cnt"><span></span> 댓글 15개</span>

			<div class="comment-box">
				<p>
					황영준 20.08.08 14:14
				</p>
				<p>
					댓글 내용 레전드 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ엌ㅋㅋㅋㅋ뤀ㅋㅋ
				</p>
				<span></span>
			</div>
			<div class="comment-box">
				<p><i class="icon ion-ios-return-right"></i> 황영준 20.08.08 14:14</p>
				<p>
					댓글 내용 레전드 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ엌ㅋㅋㅋㅋ뤀ㅋㅋ
				</p>
				<span></span>
			</div>
		</div>
	</section>
</template>

<script>
import { fetchArticle } from '@/api/article.js';
export default {
	data() {
		return {
			articleData: {
				title: null,
				auther: null,
				date: null,
				content: null,
			},
			comment: [],
		};
	},
	props: {
		articleId: Number,
	},
	methods: {
		async fetchData() {
			const { data } = await fetchArticle(2);
			this.articleData.title = data.title;
			this.articleData.auther = data.user.username;
			this.content = data.content;
			console.log();
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style lang="scss" scoped>
.aritcle-container {
	.article-header {
		display: flex;
		flex-direction: column;
		margin-top: 3rem;
		.article-header-underline {
			margin-top: 1rem;
			width: 100%;
			height: 2px;
			background: $gray;
		}
	}
	.article-body {
		margin-top: 2rem;
	}
	.bookmark-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70px;
		height: 40px;
		border-radius: 3px;
		border: 1px solid $gray;
		margin: 0 auto;
		margin-top: 1rem;
		i {
			margin-right: 0.5rem;
			color: $yellow;
		}
	}
}
.comment-container {
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	.comment-cnt {
		color: $green;
		span {
			display: inline-block;
			width: 2px;
			height: 20px;
			background: $yellow;
		}
	}
	.comment-box {
		display: flex;
		flex-direction: column;
		span {
			width: 100%;
			height: 1px;
			background: $gray;
		}
	}
}
</style>
