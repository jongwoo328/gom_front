<template>
	<button
		:class="['common-button', positive ? 'positive' : '']"
		v-text="buttonText"
		:id="id"
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
		id: String,
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
	padding: 0 10px 0 10px;
	transition: all 0.2s linear;

	&:hover {
		background-color: black;
		color: white;
		border: 1px solid black;
	}
	&:disabled {
		opacity: 0.5;
		&:hover {
			cursor: default;
		}
	}
}
.positive {
	background-color: $green;
	color: white;
	&:hover {
		background-color: white;
		color: $green;
		border: 1px solid $green;
	}
}
</style>
