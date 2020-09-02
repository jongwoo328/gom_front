<template>
	<section class="container">
		<section class="aritcle-container">
			<header class="article-header">
				<h1>{{ articleData.title }}</h1>
				<p>{{ articleData.auther }} | {{ articleData.date }}</p>
				<span class="article-header-underline"></span>
			</header>
			<article class="article-body" v-html="articleData.content"></article>
			<section class="bookmark-box" @click="bookmark">
				<p>
					<i v-if="articleData.isBookmark" class="icon ion-md-bookmark"></i
					><i v-else class="icon ion-md-bookmark bookmark-black"></i>
				</p>
				<p>{{ articleData.bookmarkCnt }}</p>
			</section>
		</section>
		<CommentForm :commentData="commentData" />
	</section>
</template>

<script>
import CommentForm from '@/components/articles/CommentForm.vue';
import { fetchArticle, bookmarkArticle } from '@/api/article';
import { customDate } from '@/util/date';

export default {
	components: {
		CommentForm,
	},
	data() {
		return {
			articleData: {
				title: null,
				content: null,
				auther: null,
				date: null,
				bookmarkCnt: null,
				isBookmark: null,
			},
			commentData: {
				commentsArray: [],
				commentCnt: null,
				commentInput: '',
			},
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
				this.articleData.title = data.data.title;
				this.articleData.content = data.data.content;
				this.articleData.auther = data.data.user.username;
				this.articleData.bookmarkCnt =
					data.data.user.bookmarked_articles.length;
				this.articleData.date = customDate(data.data.created_at);
				// comment
				this.commentData.commentsArray = data.data.comments;
				this.commentData.commentsArray.forEach(el => (el['isClick'] = false));
				this.commentData.commentCnt = data.data.comments.length;
				this.articleData.bookmarkCnt = data.bookmark_count;
				this.articleData.isBookmark = data.is_bookmarked;
			} catch (error) {
				console.log(error);
			}
		},
		async bookmark() {
			try {
				const { data } = await bookmarkArticle(1);
				this.articleData.isBookmark = !this.articleData.isBookmark;
				this.articleData.bookmarkCnt += data;
			} catch (error) {
				console.log(error);
			}
		},
	},
	computed: {
		isVaildComment() {
			return this.commentData.commentInput ? true : false;
		},
		// openCoComment(commentId) {
		// 	return !this.commentData.commentsArray.filter(el => el.id === commentId)
		// 		.isClick;
		// },
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
		.bookmark-black {
			color: gray;
		}
	}
}
</style>
