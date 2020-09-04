<template>
	<section>
		<div
			:class="comment.parent_comment === null ? 'comment-box' : 'cocomment-box'"
			@click="isClick = !isClick"
		>
			<i
				v-if="comment.parent_comment !== null"
				class="icon ion-md-return-right"
			></i>
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
		<span></span>
		<section v-if="isLoggedIn && comment.parent_comment === null">
			<form v-if="isClick" class="comment-form" @submit.prevent="submitComment">
				<div class="comment-box">
					<i class="icon ion-md-return-right"></i>
					<p>{{ getUserData.username }}</p>
					<input class="comment-input" type="text" v-model="commentInput" />
					<button :disabled="!isVaildComment" class="comment-submit__button">
						작성
					</button>
				</div>
			</form>
		</section>
	</section>
</template>

<script>
import { createCoByComment, deleteComment } from '@/api/article';
import { mapGetters } from 'vuex';
export default {
	props: {
		comment: Object,
		articleId: Number,
	},
	data() {
		return {
			isClick: this.comment.isClick,
			commentInput: '',
		};
	},
	methods: {
		fetchData() {
			this.$emit('fetchData');
		},
		async submitComment() {
			try {
				const commentData = {
					content: this.commentInput,
				};
				const articleId = this.articleId;
				await createCoByComment(articleId, this.comment.id, commentData);
				this.commentInput = '';
				this.isClick = false;
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
			return this.commentInput ? true : false;
		},
	},
};
</script>

<style lang="scss" scoped>
.comment-box {
	display: flex;
	position: relative;
	.comment-content {
		margin-left: 1rem;
	}
}
.cocomment-box {
	display: flex;
	background: $lightgreen;
	position: relative;
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

.icon-close {
	color: red;
	position: absolute;
	right: 0;
}
</style>
