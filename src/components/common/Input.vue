<template>
	<input class="common-input" :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
	name: 'Input',
	props: {
		type: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss">
input.common-input {
	border-style: solid;
	border-color: black;
	border-width: 0 0 2px 0;
	min-height: 30px;

	&:focus {
		outline-width: 0;
	}
}
input.common-input[type='file'] {
	border: 0;
}
</style>
