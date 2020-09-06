<template>
	<section class="not-box">
		<p class="text-box">페이지를 찾을 수 없습니다 :)</p>
		<img class="img-box" src="@/assets/images/GOM/gom.png" alt="notFoundImg" />
		<router-link to="/">
			<button class="common-button">
				MAIN
			</button>
		</router-link>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not-box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.img-box {
		width: 50%;
		height: 50%;
	}
}
.text-box {
}
.common-button {
	background-color: white;
	color: $green;
	min-height: 30px;
	border: 1px solid $green;
	border-radius: 5px;
	padding: 0 10px 0 10px;
	transition: all 0.2s linear;
	&:hover {
		background-color: $green;
		color: white;
		border: 1px solid $green;
	}
}
</style>
