<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<header>
						<h2>회원 가입</h2>
					</header>
					<section>
						<label for="username">별명</label>
						<Input id="username" name="username" />
						<p id="username-validation"></p>
						<label for="email">이메일</label>
						<Input id="email" name="email" type="email" />
						<p id="email-validation"></p>
						<label for="password1">비밀번호</label>
						<Input id="password1" name="password1" type="password" />
						<p id="password-validation"></p>
						<label for="password2">비밀번호 확인</label>
						<Input id="password2" name="password2" type="password" />
						<p id="password-confirmation"></p>
					</section>
					<footer>
						<Button :positive="TRUE" buttonText="가입하기"></Button>
						<Button @click.native="$emit('close')" buttonText="취소"></Button>
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
	name: 'SignupModal',
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

<style lang="scss" scoped></style>
