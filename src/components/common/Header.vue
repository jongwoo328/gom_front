<template>
	<header id="header">
		<div class="white"></div>
		<div class="yellow"></div>
		<div class="green">
			<router-link :to="{ name: 'Articles' }">
				<h1 id="title">
					곰 보드
				</h1>
			</router-link>
			<nav>
				<ul>
					<li v-if="!this.isLoggedIn" @click="showSignup">
						가입하기
					</li>
					<li v-if="!this.isLoggedIn" @click="showLogin">
						로그인
					</li>
					<li v-if="this.isLoggedIn">
						<router-link class="create-link" :to="{ name: 'ArticleCreate' }">
							글작성
						</router-link>
					</li>
					<li v-if="this.isLoggedIn" @click="logout">
						로그아웃
					</li>
				</ul>
			</nav>
		</div>
		<SignupModal @login="reload" v-if="showSignupModal" @close="close" />
		<LoginModal v-if="showLoginModal" @close="close" />
	</header>
</template>

<script>
import SignupModal from '@/components/modal/SignupModal.vue';
import LoginModal from '@/components/modal/LoginModal.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'Header',
	components: {
		SignupModal,
		LoginModal,
	},
	data() {
		return {
			showSignupModal: false,
			showLoginModal: false,
		};
	},
	computed: {
		...mapGetters(['isLoggedIn']),
	},
	methods: {
		...mapActions(['logout']),
		close() {
			this.showLoginModal = false;
			this.showSignupModal = false;
		},
		showLogin() {
			this.showLoginModal = true;
			this.showSignupModal = false;
		},
		showSignup() {
			this.showLoginModal = false;
			this.showSignupModal = true;
		},
	},
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
				color: white;
				.create-link {
					color: white;
				}
				&:hover {
					cursor: pointer;
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
