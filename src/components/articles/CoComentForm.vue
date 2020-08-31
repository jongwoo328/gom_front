<template>
	<form class="comment-form" @submit.prevent="submitComment">
		<div class="comment-box">
			<i class="icon ion-md-return-right"></i>
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
</template>

<script>
import { createComment } from '@/api/article';
import { mapGetters } from 'vuex';
export default {
	props: {
		articleId: Number,
		parentCommentId: Number,
	},
	data() {
		return {
			commentData: {
				commentInput: null,
			},
		};
	},
	methods: {
		async submitComment() {
			try {
				const commentData = {
					content: this.commentData.commentInput,
					parent_comment: this.parentCommentId,
				};
				await createComment(1, commentData);
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
	},
};
</script>

<style lang="scss" scoped>
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
</style>
