<template>
	<section class="table">
		<header class="table-header">
			<div class="table-header__row">
				<div class="No" scope="col">번호</div>
				<div class="title" scope="col">제목</div>
				<div class="auther" scope="col">글쓴이</div>
				<div class="date" scope="col">날짜</div>
				<div class="scrap-num" scope="col">스크랩</div>
				<!-- <div class="click-num" scope="col">답글</div> -->
			</div>
		</header>

		<ArticleTableBody :articles="articles"></ArticleTableBody>
	</section>
</template>

<script>
import ArticleTableBody from '@/components/articles/ArticleTableBody.vue';

export default {
	props: {
		articles: Array,
	},
	components: {
		ArticleTableBody,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss">
.table {
	margin-top: 5rem;
	// width: 100%;
	// border-spacing: 0;
	// // border: 1px solid gray;
	width: 100%;
	font-size: 1rem;
	@media screen and (min-width: 768px) {
		font-size: 1rem;
	}
	.table-header {
		color: $green;
		border-bottom: 3px solid $green;
		text-align: center !important;
		.table-header__row {
			height: 25px;
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}
	.No {
		width: 10%;
		// text-align: center;
	}
	.title {
		// text-align: left;
		width: 40%;
	}
	.auther {
		// text-align: center;
		width: 15%;
	}
	.date {
		width: 20%;
		// text-align: center;
	}
	.scrap-num {
		width: 15%;
		// text-align: center;
	}
	// .click-num {
	// 	width: 10%;
	// 	// text-align: center;
	// }
	@media screen and (min-width: 768px) {
		.No {
			width: 10%;
			// text-align: center;
		}
		.title {
			// text-align: left;
			width: 55%;
		}
		.auther {
			// text-align: center;
			width: 10%;
		}
		.date {
			width: 15%;
			// text-align: center;
		}
		.scrap-num {
			width: 10%;
			// text-align: center;
		}
		// .click-num {
		// 	width: 10%;
		// 	// text-align: center;
		// }
	}
}
.silding-bar {
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	ul {
		display: flex;
		li {
			width: 1.5rem;
			text-align: center;
		}
	}
}
.c-sliding-pagination__list-element {
	padding: 5px;
	margin: 5px;
}
.c-sliding-pagination__list-element--active {
	background-color: $green;
	a {
		color: white;
	}
}
</style>
