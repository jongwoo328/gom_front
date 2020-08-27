<template>
	<header id="header">
		<nav>
			<ul>
				<!-- 필요한 내용으로 바꿔넣기 -->
				<li>test1</li>
				<li>test2</li>
			</ul>
		</nav>
		<div class="yellow"></div>
		<div class="green">
			<router-link :to="{ name: 'Home' }">
				<h1 id="title">곰 보드</h1>
			</router-link>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
};
</script>

<style lang="scss" scoped>
#header {
	nav {
		display: block;
		height: 60px;

		ul {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-right: 20px;
			li {
				margin: 0 10px;
			}
		}
	}
	.yellow {
		background-color: $yellow;
		height: 30px;
	}
	.green {
		background-color: $green;
		height: 100px;
		display: flex;
		align-items: center;
	}
	#title {
		color: whitesmoke;
		padding-left: 50px;
	}

	@media screen and (min-width: 768px) {
		ul {
			padding-right: 50px;

			li {
				margin: 0 20px;
			}
		}
	}
}
</style>
