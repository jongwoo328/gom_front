<template>
	<section class="container">
		<section class="aritcle-container">
			<header class="article-header">
				<h1>{{ articleData.title }}</h1>
				<p>{{ articleData.auther }} | {{ articleData.date }}</p>
				<span class="article-header-underline"></span>
			</header>
			<article class="article-body">
				{{ articleData.content }}
			</article>
			<section class="bookmark-box">
				<p><i class="icon ion-md-bookmark"></i></p>
				<p>{{ articleData.bookmarkCnt }}</p>
			</section>
		</section>
		<section class="comment-container">
			<span class="comment-cnt"
				><span></span> 댓글 {{ commentData.commentCnt }}개</span
			>
			<article
				class="comment-box"
				:key="comment.id"
				v-for="comment in commentData.commentsArray"
			>
				<p class="comment-username">
					{{ comment.user.username }}
				</p>
				<p class="comment-content">
					{{ comment.content }}
				</p>
				<span></span>
			</article>
			<form class="comment-form">
				<p>{{ getUserData.username }}</p>
				<input
					class="comment-input"
					type="text"
					v-model="commentData.commentInput"
				/>
			</form>
		</section>
	</section>
</template>

<script>
import { fetchArticle } from '@/api/article';
import { customDate } from '@/util/date';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			articleData: {
				title: null,
				content: null,
				auther: null,
				date: null,
				bookmarkCnt: null,
			},
			commentData: {
				commentsArray: [],
				commentCnt: null,
				commentInput: '',
			},
			// userName: this.getUserData,
		};
	},
	props: {
		articleId: Number,
	},
	methods: {
		async fetchData() {
			try {
				const { data } = await fetchArticle(1);
				console.log(data);
				this.articleData.title = data.title;
				this.articleData.content = data.content;
				this.articleData.auther = data.user.username;
				this.articleData.bookmarkCnt = data.liked_user.length;
				this.articleData.date = customDate(data.created_at);
				// comment
				this.commentData.commentsArray = data.comments;
				this.commentData.commentCnt = data.comments.length;
			} catch (error) {
				console.log(error);
			}
		},
	},
	computed: {
		...mapGetters(['getUserData']),
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
	.comment-form {
		.comment-content {
			margin: 0 !important;
		}
		.comment-input {
			width: 80%;
			border-bottom: 2px solid black;
		}
	}
}
</style>
