<template>
	<section class="container">
		<h2>가입하기</h2>
		<p>임시 component Test</p>
		<p>INPUT</p>
		<Input />
		<p>INPUT FILE</p>
		<Input type="file" />
		<p>BUTTON ACTIVE</p>
		<Button buttonText="확인" positive="1"></Button>
		<p>BUTTON NONACTIVE</p>
		<Button buttonText="취소"></Button>
		<p>SELECT</p>
		<Select :options="options"></Select>
	</section>
</template>

<script>
import Input from '@/components/common/Input.vue';
import Button from '@/components/common/Button.vue';
import Select from '@/components/common/Select.vue';

export default {
	name: 'SignUp',
	components: {
		Input,
		Button,
		Select,
	},
	data() {
		return {
			options: [
				{
					value: 1,
					text: 'test1',
				},
				{
					value: 2,
					text: 'test2',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
// test
section * {
	display: block;
	margin: 10px 0;
}
</style>
