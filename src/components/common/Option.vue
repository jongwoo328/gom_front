<template>
	<option :value="option.value" v-text="option.text"></option>
</template>

<script>
export default {
	name: 'Option',
	props: {
		option: Object,
	},
};
</script>

<style></style>
