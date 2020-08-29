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
						<Input
							@keyup.native="checkUsername"
							id="username"
							name="username"
						/>
						<p id="username-validation"></p>
						<label for="email">이메일</label>
						<Input
							@keyup.native="checkEmail"
							id="email"
							name="email"
							type="email"
						/>
						<p id="email-check"></p>
						<p id="email-validation"></p>
						<label for="password1">비밀번호</label>
						<Input
							id="password1"
							name="password1"
							type="password"
							@keyup.native="checkPassword1"
							:maxlength="passwordMaxLength"
							:minlength="passwordMinLength"
							placeholder="8자 이상 30자 이하"
						/>
						<p id="password-validation"></p>
						<label for="password2">비밀번호 확인</label>
						<Input
							id="password2"
							name="password2"
							type="password"
							@keyup.native="checkPassword2"
							:maxlength="passwordMaxLength"
							:minlength="passwordMinLength"
							placeholder="8자 이상 30자 이하"
						/>
						<p id="password-confirmation"></p>
					</section>
					<footer>
						<Button
							id="submitButton"
							:positive="TRUE"
							buttonText="가입하기"
							@click.native="signUp"
						></Button>
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
import { verifyUsername, verifyEmail, registerUser } from '@/api/account.js';

export default {
	name: 'SignupModal',
	components: {
		Button,
		Input,
	},
	data() {
		return {
			TRUE: true,
			emailMaxLength: 30,
			passwordMaxLength: 30,
			passwordMinLength: 8,
			usernameFlag: false,
			emailFlag: false,
			password1Flag: false,
			password2Flag: false,
			isFormValid: false,
		};
	},
	watch: {
		isFormValid() {
			const submitButton = document.querySelector('#submitButton');
			if (this.isFormValid) {
				submitButton.disabled = false;
			} else {
				submitButton.disabled = true;
			}
		},
	},
	mounted() {
		const submitButton = document.querySelector('#submitButton');
		submitButton.disabled = true;
	},
	methods: {
		async checkUsername() {
			const username = document.querySelector('#username').value;
			const usernameValidationMsg = document.querySelector(
				'#username-validation',
			);
			if (username === '') {
				usernameValidationMsg.innerText = '';
				this.usernameFlag = false;
			} else {
				const { data } = await verifyUsername({
					username: username,
				});
				if (data.valid === true) {
					usernameValidationMsg.innerText = `${data.username} 은 사용할 수 있습니다.`;
					usernameValidationMsg.style.color = 'forestgreen';
					this.usernameFlag = true;
				} else {
					usernameValidationMsg.innerText = `${data.username} 은 사용할 수 없습니다.`;
					usernameValidationMsg.style.color = 'red';
					this.usernameFlag = false;
				}
			}
			this.checkForm();
		},
		async checkEmail() {
			const email = document.querySelector('#email').value;
			const emailValidationMsg = document.querySelector('#email-validation');
			const emailCheckMsg = document.querySelector('#email-check');
			if (email === '') {
				emailValidationMsg.innerText = '';
				emailCheckMsg.innerText = '';
				this.emailFlag = false;
			} else {
				if (this.isEmail(email)) {
					emailCheckMsg.innerText = '올바른 형식입니다.';
					emailCheckMsg.style.color = 'forestgreen';
					const { data } = await verifyEmail({
						email: email,
					});
					if (data.valid === true) {
						emailValidationMsg.innerText = `${data.email} 은 사용할 수 있습니다.`;
						emailValidationMsg.style.color = 'forestgreen';
						this.emailFlag = true;
					} else {
						emailValidationMsg.innerText = `${data.email} 은 사용할 수 없습니다.`;
						emailValidationMsg.style.color = 'red';
						this.emailFlag = false;
					}
				} else {
					emailCheckMsg.innerText = '올바르지 않은 이메일 형식입니다.';
					emailCheckMsg.style.color = 'red';
					emailValidationMsg.innerText = '';
					this.emailFlag = false;
				}
			}
			this.checkForm();
		},
		isEmail(email) {
			const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			return re.test(String(email).toLowerCase());
		},
		checkPassword1() {
			const password = document.querySelector('#password1').value;
			const passwordValidationMsg = document.querySelector(
				'#password-validation',
			);
			if (password.length < 8 || password.length > 30) {
				passwordValidationMsg.innerText =
					'길이가 맞지 않습니다. (8자 이상 30자 이하)';
				passwordValidationMsg.style.color = 'red';
				this.password1Flag = false;
			} else {
				passwordValidationMsg.innerText = '사용가능';
				passwordValidationMsg.style.color = 'forestgreen';
				this.password1Flag = true;
			}
			this.checkForm();
		},
		checkPassword2() {
			const password1 = document.querySelector('#password1').value;
			const password2 = document.querySelector('#password2').value;
			const passwordConfirmationMsg = document.querySelector(
				'#password-confirmation',
			);
			if (password1 === password2) {
				passwordConfirmationMsg.innerText = '비밀번호가 일치합니다.';
				passwordConfirmationMsg.style.color = 'forestgreen';
				this.password2Flag = true;
			} else {
				passwordConfirmationMsg.innerText = '비밀번호가 일치하지 않습니다.';
				passwordConfirmationMsg.style.color = 'red';
				this.password2Flag = false;
			}
			this.checkForm();
		},
		checkForm() {
			this.isFormValid =
				this.usernameFlag &&
				this.emailFlag &&
				this.password1Flag &&
				this.password2Flag;
		},
		async signUp() {
			const username = document.querySelector('#username').value;
			if (username === '') {
				alert('별명을 확인해주세요.');
				return;
			}
			const email = document.querySelector('#email').value;
			if (email === '') {
				alert('이메일을 확인해주세요.');
				return;
			}
			const password1 = document.querySelector('#password1').value;
			const password2 = document.querySelector('#password2').value;
			if (password1 === '' || password2 === '') {
				alert('비밀번호를 확인해주세요.');
				return;
			}
			const res = await registerUser({
				username: username,
				email: email,
				password1: password1,
				password2: password2,
			});
			if (res.status === 201) {
				console.log(res);
				this.$store.dispatch('login', res.data);
				this.$emit('close');
			} else if (res.status === 400) {
				alert('이메일, 별명을 다시 확인해주세요.');
			} else {
				alert('서버가 요청을 처리할 수 없습니다.');
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 576px) {
	.modal-container {
		min-width: 500px;
	}
}
</style>
