<template>
	<button
		:class="['common-button', positive ? 'positive' : '']"
		v-text="buttonText"
	></button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		buttonText: String,
		positive: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss">
.common-button {
	background-color: white;
	color: $green;
	min-height: 30px;
	border: 1px solid $green;
	margin: 0 5px 0 5px;
}
.positive {
	background-color: $green;
	color: white;
}
</style>
