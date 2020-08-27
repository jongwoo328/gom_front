<template>
	<div id="app">
		<Header></Header>
		<router-view />
	</div>
</template>

<script>
import Header from '@/components/common/Header.vue';

export default {
	components: {
		Header,
	},
};
</script>

<style lang="scss" scoped>
@import './assets/css/reset.css';
@import './assets/css/common.css';
</style>
