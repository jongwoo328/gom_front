<template>
	<section>
		<h2>{{ title }}</h2>
		<TiptapEditor />
	</section>
</template>

<script>
import TiptapEditor from '@/components/articles/TiptapEditor.vue';
export default {
	components: {
		TiptapEditor,
	},
	data() {
		return {
			title: null,
			status: null,
		};
	},
	created() {
		const isUpdate = this.$route.params.articleId ? true : false;
		if (isUpdate) {
			this.title = '글 수정';
			this.status = 'update';
		} else {
			this.title = '글 작성';
			this.status = 'create';
		}
	},
};
</script>
