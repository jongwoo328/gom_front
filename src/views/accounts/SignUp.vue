<template>
	<section class="container">
		<h2>가입하기</h2>
		<form>
			<div class="label-wrapper">
				<label for="username">별명</label>
				<div class="input-wrapper">
					<Input id="username" name="username" /><Button
						buttonText="중복확인"
						:positive="TRUE"
					></Button>
				</div>
			</div>
			<div class="label-wrapper">
				<label for="email">이메일</label>
				<div class="input-wrapper">
					<Input id="email" name="email" type="email" /><Button
						buttonText="중복확인"
						:positive="TRUE"
					></Button>
				</div>
			</div>
			<div class="label-wrapper">
				<label for="password1">비밀번호</label>
				<div class="input-wrapper">
					<Input id="password1" name="password1" type="password" />
				</div>
			</div>
			<div class="label-wrapper">
				<label for="password2">비밀번호 확인</label>
				<div class="input-wrapper">
					<Input id="password2" name="password2" type="password" />
				</div>
			</div>
			<div class="button-wrapper">
				<Button buttonText="가입하기" :positive="TRUE"></Button>
				<Button buttonText="뒤로가기"></Button>
			</div>
		</form>
	</section>
</template>

<script>
import Input from '@/components/common/Input.vue';
import Button from '@/components/common/Button.vue';
// import Select from '@/components/common/Select.vue';
import { TRUE } from '@/util/common.js';

export default {
	name: 'SignUp',
	components: {
		Input,
		Button,
		// Select,
	},
	data() {
		return {
			TRUE: TRUE,
		};
	},
};
</script>

<style lang="scss" scoped>
// .label-wrapper {
// 	width: 100%;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;

// 	label {
// 		display: block;
// 	}
// 	input {
// 		min-width: 200px;
// 	}
// 	@media screen and (min-width: 576px) {
// 		input {
// 			min-width: 400px;
// 		}
// 	}
// 	@media screen and (min-width: 768px) {
// 		input {
// 			min-width: 600px;
// 		}
// 	}
// }
// .input-wrapper {
// 	margin-bottom: 30px;
// 	width: 100%;
// }
// .button-wrapper {
// 	margin-top: 50px;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// }
</style>
