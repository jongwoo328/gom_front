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
			<CommentCard
				@fetchData="fetchData"
				class="comment-card"
				:articleId="articleId"
				:comment="comment"
			/>
			<div v-if="comment.parent_comment === null">
				<div
					class="childcomment-wrap"
					:key="childcomment.id"
					v-for="childcomment in comment.child_comments"
				>
					<CommentCard :articleId="articleId" :comment="childcomment" />
				</div>
			</div>
			<span></span>
		</article>
		<form
			v-if="isLoggedIn"
			class="comment-form"
			@submit.prevent="submitComment"
		>
			<div class="comment-box">
				<p class="comment-box__username">{{ getUserData.username }}</p>
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
import CommentCard from './CommentCard.vue';
import { createComment, deleteComment, fetchComment } from '@/api/article';
import { mapGetters } from 'vuex';
export default {
	components: {
		CommentCard,
	},
	props: {
		articleId: Number,
	},
	data() {
		return {
			commentData: {
				commentArray: [],
				commentCnt: null,
			},
		};
	},
	methods: {
		async fetchData() {
			try {
				const articleId = this.$route.params.articleId;
				this.commentData.commentCnt = 0;
				const { data } = await fetchComment(articleId);
				this.commentData.commentsArray = data;
				this.commentData.commentsArray.forEach(el => {
					el['isClick'] = false;
					this.commentData.commentCnt += el.child_comments.length;
				});
				this.commentData.commentCnt += data.length;
			} catch (error) {
				console.log(error);
			}
		},
		async submitComment() {
			try {
				const articleId = this.articleId;
				const commentData = {
					content: this.commentData.commentInput,
					parent_comment: null,
				};
				await createComment(articleId, commentData);
				this.commentData.commentInput = null;
				this.fetchData();
			} catch (error) {
				console.log(error);
			}
		},
		async submitDeleteComment(commentId) {
			try {
				const articleId = this.articleId;
				await deleteComment(articleId, commentId);
				this.fetchData();
			} catch (error) {
				console.log(error);
			}
		},
	},
	computed: {
		...mapGetters(['getUserData', 'isLoggedIn']),
		isVaildComment() {
			return this.commentData.commentInput ? true : false;
		},
	},
	created() {
		this.fetchData();
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
		display: flex;
		span {
			display: inline-block;
			width: 2px;
			height: 16px;
			background: $yellow;
			margin-right: 0.4rem;
			margin-bottom: 1rem;
		}
	}
	.comment-wrap {
		display: flex;
		flex-direction: column;
		.comment-card {
			&:hover {
				cursor: pointer;
			}
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
			align-items: center;
		}
		.comment-input {
			width: 100%;
			margin-right: 1rem;
			padding: 0.5rem;
			border: 1px solid $green;
			border-radius: 5px;
		}
		.comment-submit__button {
			width: 50px;
			height: 33px;
			font-size: 0.8rem;
			border: 1px solid gray;
			border-radius: 4px;
			&:hover {
				cursor: pointer;
				color: white;
				background: $green;
				border: none;
			}
			&:disabled {
				&:hover {
					cursor: pointer;
					color: gray;
					background: white;
					border: 1px solid gray;
				}
			}
		}
		.comment-box__username {
			display: flex;
			align-items: center;
			height: 33px;
			justify-content: center;
			width: 15%;
		}
	}
}
.icon-close {
	color: red;
}
</style>
