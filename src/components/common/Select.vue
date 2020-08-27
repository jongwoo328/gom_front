<template>
	<select class="common-select" :name="name" :id="id">
		<Option
			v-for="option in options"
			:key="option.value"
			:option="option"
		></Option>
	</select>
</template>

<script>
import Option from '@/components/common/Option.vue';

export default {
	name: 'Select',
	props: {
		name: String,
		id: String,
		options: Array,
	},
	components: {
		Option,
	},
};
</script>

<style lang="scss">
.common-select {
	border: 1px solid $green;
	padding: 0 10px;
	min-height: 30px;
}
</style>
