<template>
	<div>
		<table class="table-container">
			<thead class="table-header">
				<tr>
					<th class="No" scope="col">번호</th>
					<th class="title" scope="col">제목</th>
					<th class="auther" scope="col">글쓴이</th>
					<th class="date" scope="col">날짜</th>
					<th class="scrap-num" scope="col">스크랩</th>
					<th class="click-num" scope="col">답글</th>
				</tr>
			</thead>
			<ArticleTableBody :articles="articles"></ArticleTableBody>
		</table>
	</div>
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
.table-container {
	margin-top: 5rem;
	width: 100%;
	border-spacing: 0;
	// border: 1px solid gray;
	.table-header {
		height: 35px;
		color: $green;
		th {
			border-bottom: 3px solid $green;
			text-align: center !important;
		}
	}
	.No {
		width: 10%;
		text-align: center;
	}
	.title {
		text-align: left;
		width: 50%;
	}
	.auther {
		text-align: center;
		width: 10%;
	}
	.date {
		width: 15%;
		text-align: center;
	}
	.scrap-num {
		width: 5%;
		text-align: center;
	}
	.click-num {
		width: 10%;
		text-align: center;
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
