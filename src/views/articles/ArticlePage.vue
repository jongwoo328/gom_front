<template>
	<div class="container">
		<table class="table-container">
			<thead class="table-header">
				<tr>
					<th class="No" scope="col">번호</th>
					<th class="title" scope="col">제목</th>
					<th class="auther" scope="col">글쓴이</th>
					<th class="date" scope="col">날짜</th>
					<th class="scrap-num" scope="col">스크랩</th>
					<th class="click-num" scope="col">조회수</th>
				</tr>
			</thead>
			<tbody class="table-body">
				<tr :key="article.pk" v-for="article in articles">
					<th class="No" scope="col">111</th>
					<th class="title" scope="col">
						<router-link>
							임시타이틀
						</router-link>
					</th>
					<th class="auther" scope="col">황영준</th>
					<th class="date" scope="col">08.10</th>
					<th class="scrap-num" scope="col">1</th>
					<th class="click-num" scope="col">123</th>
				</tr>
			</tbody>
		</table>
		<sliding-pagination
			class="silding-bar"
			:current="paginationData.currentPage"
			:total="paginationData.totalPages"
			@page-change="pageChangeHandler"
		></sliding-pagination>
	</div>
</template>

<script>
import SlidingPagination from 'vue-sliding-pagination';
export default {
	components: {
		SlidingPagination,
	},
	data() {
		return {
			articles: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			paginationData: {
				currentPage: 1,
				totalPages: 10,
			},
		};
	},
	methods: {
		pageChangeHandler(selectedPage) {
			this.currentPage = selectedPage;
		},
	},
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
	.table-body {
		tr {
			height: 30px;
		}
	}
	.No {
		width: 10%;
	}
	.title {
		text-align: left;
		width: 50%;
	}
	.auther {
		text-align: left;
		width: 10%;
	}
	.date {
		width: 10%;
	}
	.scrap-num {
		width: 10%;
	}
	.click-num {
		width: 10%;
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
</style>
