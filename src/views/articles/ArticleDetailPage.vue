<template>
	<section class="container">
		<section class="aritcle-container">
			<header class="article-header">
				<h1>{{ articleData.title }}</h1>
				<div class="article-header__box">
					<p class="article-auther">{{ articleData.auther }}</p>
					<p class="article-wall">|</p>
					<p class="article-date">{{ articleData.date }}</p>
				</div>
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
			<section v-if="isMe" class="update__delete-box">
				<button class="update-btn">
					<router-link :to="`/article/${articleData.id}/update`"
						>수정</router-link
					>
				</button>
				<button class="delete-btn" @click="deleteArticle">삭제</button>
			</section>
		</section>
		<CommentForm :articleId="articleData.id" :commentData="commentData" />
	</section>
</template>

<script>
import CommentForm from '@/components/articles/CommentForm.vue';
import { fetchArticle, deleteArticle, bookmarkArticle } from '@/api/article';
import { customDate } from '@/util/date';
import { mapGetters } from 'vuex';

export default {
	components: {
		CommentForm,
	},
	data() {
		return {
			articleData: {
				id: null,
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
	methods: {
		async fetchData() {
			try {
				const articleId = this.$route.params.articleId;
				const { data } = await fetchArticle(articleId);
				this.articleData.id = parseInt(articleId);
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
				const articleId = this.articleData.id;
				const { data } = await bookmarkArticle(articleId);
				this.articleData.isBookmark = !this.articleData.isBookmark;
				this.articleData.bookmarkCnt += data;
			} catch (error) {
				console.log(error);
			}
		},
		async deleteArticle() {
			try {
				const articleId = this.articleData.id;
				await deleteArticle(articleId);
				this.$router.push({ name: 'Articles' });
			} catch (error) {
				console.log(error);
			}
		},
	},
	computed: {
		...mapGetters(['getUserData']),
		isVaildComment() {
			return this.commentData.commentInput ? true : false;
		},
		isMe() {
			return this.articleData.auther === this.getUserData.username
				? true
				: false;
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
		h1 {
			margin-bottom: 1rem;
			font-size: 1.5rem;
		}
		.article-header__box {
			color: gray;
			display: flex;
			align-items: center;
			.article-auther {
				font-size: 1.2rem;
			}
			.article-wall {
				margin-left: 0.5rem;
				margin-right: 0.5rem;
			}
			.article-date {
				font-size: 0.8rem;
			}
		}

		.article-header-underline {
			margin-top: 0.4rem;
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
		&:hover {
			cursor: pointer;
		}
	}
	.update__delete-box {
		display: flex;
		justify-content: flex-end;
		.update-btn {
			margin-right: 10px;
			width: 50px;
			height: 30px;
			border: 1px solid $green;
			border-radius: 5px;
			background: white;
			color: $green;
		}
		.delete-btn {
			width: 50px;
			height: 30px;
			background: $green;
			border: none;
			border-radius: 5px;
			color: white;
		}
	}
}
</style>
