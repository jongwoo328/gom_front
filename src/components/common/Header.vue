<template>
	<header id="header">
		<div class="white"></div>
		<div class="yellow"></div>
		<div class="green">
			<router-link :to="{ name: 'Home' }">
				<h1 id="title">곰 보드</h1>
			</router-link>
			<nav>
				<ul>
					<li><router-link :to="{ name: 'SignUp' }">가입하기</router-link></li>
					<li><a href="">로그인</a></li>
				</ul>
			</nav>
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
		height: 30px;

		ul {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-right: 20px;

			li {
				margin: 0 10px;

				a {
					color: white;
				}
			}
		}
	}
	.white {
		background-color: white;
		height: 15px;
	}
	.yellow {
		background-color: $yellow;
		height: 15px;
	}
	.green {
		background-color: $green;
		height: 65px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	#title {
		color: whitesmoke;
		padding-left: 20px;
	}

	@media screen and (min-width: 768px) {
		ul {
			padding-right: 50px;

			li {
				margin: 0 20px;
			}
		}
		#title {
			padding-left: 50px;
		}
	}
}
</style>
