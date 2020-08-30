<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<header>
						<h2>로그인</h2>
					</header>
					<section>
						<div class="modal-input__wrapper">
							<label for="email">이메일</label>
							<Input id="login-email" />
							<label for="password">비밀번호</label>
							<Input type="password" id="login-password" />
						</div>
						<div class="modal-button__wrapper">
							<Button
								@click.native="userLogin"
								:positive="true"
								buttonText="로그인"
							></Button>
							<Button @click.native="$emit('close')" buttonText="취소"></Button>
						</div>
					</section>
					<footer></footer>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import Button from '@/components/common/Button.vue';
import Input from '@/components/common/Input.vue';
import { login } from '@/api/account.js';

export default {
	name: 'Login',
	components: {
		Button,
		Input,
	},
	methods: {
		async userLogin() {
			const email = document.querySelector('#login-email').value;
			const password = document.querySelector('#login-password').value;
			try {
				const res = await login({
					email: email,
					password: password,
				});
				this.$store.dispatch('login', res.data);
				this.$emit('close');
			} catch (error) {
				if (error.response.status === 400) {
					alert('로그인 정보를 확인해주세요.');
				} else if (error.response.status === 500) {
					alert('서버가 요청을 처리할 수 없습니다.');
				} else {
					alert(`오류입니다. (status: ${error.response.status}) 문의해주세요.`);
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
section {
	display: flex;
	justify-content: space-between;
	align-items: stretch;

	.modal-input__wrapper {
		width: 60%;
	}
	.modal-button__wrapper {
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
