<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<header>
						<h2>로그인</h2>
					</header>
					<section>
						<div class="input-wrapper">
							<label for="">이메일</label>
							<Input />
							<label for="">비밀번호</label>
							<Input />
						</div>
						<div class="button-wrapper">
							<Button :positive="TRUE" buttonText="로그인"></Button>
							<Button @click.native="$emit('close')" buttonText="취소"></Button>
						</div>
					</section>
					<footer>
						<!-- <Button :positive="TRUE" buttonText="로그인"></Button>
						<Button @click.native="$emit('close')" buttonText="취소"></Button> -->
					</footer>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import Button from '@/components/common/Button.vue';
import Input from '@/components/common/Input.vue';

export default {
	name: 'Login',
	components: {
		Button,
		Input,
	},
	data() {
		return {
			TRUE: true,
		};
	},
};
</script>

<style lang="scss" scoped>
section {
	display: flex;
	justify-content: space-between;
	align-items: stretch;

	.input-wrapper {
		width: 60%;
	}
	.button-wrapper {
		width: 35%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		button:first-child {
			height: 60%;
		}
		button:nth-child(2) {
			height: 30%;
		}
	}
	input {
		margin-bottom: 10px;
	}
}
@media screen and (min-width: 576px) {
	.modal-container {
		min-width: 500px;
	}
}
</style>
