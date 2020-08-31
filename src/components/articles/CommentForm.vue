<template>
	<section class="comment-container">
		<span class="comment-cnt"
			><span></span> 댓글 {{ commentData.commentCnt }}개</span
		>
		<article
			class="comment-wrap"
			:key="comment.id"
			v-for="comment in commentData.commentsArray"
		>
			<CommentCard />
			<div v-if="(open = comment.isClick)">
				assdfsfsdf
			</div>
			<div v-else></div>
			<div
				class="childcomment-wrap"
				:key="childcomment.id"
				v-for="childcomment in comment.child_comments"
			>
				<div class="comment-box">
					<i class="icon ion-md-return-right"></i>
					<p class="comment-username">
						{{ comment.user.username }}
					</p>
					<p class="comment-content">
						{{ comment.content }}
					</p>
					<i
						v-if="comment.user.id === getUserData.pk"
						class="icon ion-md-close icon-close"
						@click="submitDeleteComment(comment.id)"
					></i>
				</div>
			</div>
			<span></span>
		</article>
		<form class="comment-form" @submit.prevent="submitComment">
			<div class="comment-box">
				<p>{{ getUserData.username }}</p>
				<input
					class="comment-input"
					type="text"
					v-model="commentData.commentInput"
				/>
				<button :disabled="!isVaildComment" class="comment-submit__button">
					작성
				</button>
			</div>
		</form>
	</section>
</template>

<script>
import { createComment, deleteComment, fetchArticle } from '@/api/article';
import { mapGetters } from 'vuex';
export default {
	props: {
		commentData: Object,
	},
	methods: {
		async fetchData() {
			try {
				const { data } = await fetchArticle(1);
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
		async submitComment() {
			try {
				const commentData = {
					content: this.commentData.commentInput,
					parent_comment: null,
				};
				await createComment(1, commentData);
				this.commentData.commentInput = null;
				this.fetchData();
			} catch (error) {
				console.log(error);
			}
		},
		async submitDeleteComment(commentId) {
			try {
				await deleteComment(1, commentId);
				this.fetchData();
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
		open: {
			get() {
				return true;
			},
			set(value) {
				return value ? true : false;
			},
		},
	},
};
</script>

<style lang="scss" scoped>
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
	.comment-wrap {
		display: flex;
		flex-direction: column;
		.comment-box {
			display: flex;
			.comment-content {
				margin-left: 1rem;
			}
			i {
				margin-right: 0.5rem;
			}
		}
		.childcomment-wrap {
			border-top: 0.5px solid $green;
		}
		span {
			width: 100%;
			height: 1px;
			background: $gray;
		}
	}
	.comment-form {
		display: flex;
		flex-direction: column;
		.comment-box {
			display: flex;
		}
		.comment-input {
			width: 80%;
			margin-left: 1rem;
			padding: 0.5rem;
			border-bottom: 2px solid black;
		}
		.comment-submit__button {
			width: 50px;
			height: 30px;
			background: $green;
			color: white;
		}
	}
}
.icon-close {
	color: red;
}
</style>
