<template>
	<section>
		<h2>글 작성</h2>
		<TiptapEditor />
	</section>
</template>

<script>
import TiptapEditor from '@/components/articles/TiptapEditor.vue';
export default {
	components: {
		TiptapEditor,
	},
};
</script>
