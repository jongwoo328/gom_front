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
					<p class="comment-box__username">{{ getUserData.username }}</p>
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
	padding: 0.3rem;
	align-items: center;
}
.cocomment-box {
	display: flex;
	position: relative;
	padding: 0.3rem;
	align-items: center;
	.ion-md-return-right {
		margin-right: 1rem;
	}
}
.comment-username {
	display: flex;
	align-items: center;
	width: 10%;
	justify-content: center;
	font-size: 1.1rem;
	font-weight: bold;
}
.comment-content {
	margin-left: 1rem;
	font-size: 0.8rem;
}
.comment-wall {
	margin-left: 0.5rem;
}
i {
	margin-right: 0.5rem;
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
		width: 55px;
		height: 33px;
		border: 1px solid $green;
		border-radius: 5px;
		background: white;
		color: black;
		font-size: 0.8rem;
		&:hover {
			cursor: pointer;
			color: white;
			background: $green;
			border: none;
		}
		&:disabled {
			&:hover {
				cursor: default;
				background: white;
				color: black;
				border: 1px solid $green;
			}
		}
	}
	.comment-box__username {
		display: flex;
		align-items: center;
		height: 33px;
		justify-content: center;
		width: 15%;
		font-size: 1.1rem;
		font-weight: bold;
	}
}
.icon-close {
	color: red;
	position: absolute;
	right: 0;
}
</style>
