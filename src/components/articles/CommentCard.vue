<template>
	<section>
		<div class="comment-box">
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
	</section>
</template>

<script>
import { deleteComment } from '@/api/article';
import { mapGetters } from 'vuex';
export default {
	props: {
		comment: Object,
	},
	methods: {
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
	},
};
</script>

<style lang="scss" scoped>
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
}
</style>
