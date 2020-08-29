<template>
	<div id="app">
		<Header></Header>
		<main class="container">
			<router-view />
		</main>
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

<style lang="scss">
@import './assets/css/reset.css';
@import './assets/css/common.css';
.container {
	margin-top: 2rem;
}
</style>
