<template>
	<form class="articleform">
		<section class="articleform-head">
			<div class="articleform-head__btnbox">
				<Button
					type="button"
					class="articleform-head__cancle"
					@click.native="$router.go(-1)"
					buttonText="취소"
				></Button>
				<Button
					type="button"
					@click.native="submit"
					class="articleform-head__submit"
					buttonText="제출"
					:positive="true"
				></Button>
			</div>
		</section>
		<section class="articleform-wrap">
			<section class="articleform-title">
				<label class="head-label" for="title">제목</label>
				<input
					id="title"
					class="articleform-title__input"
					type="text"
					v-model="title"
				/>
			</section>
			<div class="editor">
				<editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
					<div class="menubar">
						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.bold() }"
							@click="commands.bold"
						>
							<img class="icon" src="@/assets/images/icons/bold.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.italic() }"
							@click="commands.italic"
						>
							<img class="icon" src="@/assets/images/icons/italic.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.strike() }"
							@click="commands.strike"
						>
							<img class="icon" src="@/assets/images/icons/strike.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.underline() }"
							@click="commands.underline"
						>
							<img class="icon" src="@/assets/images/icons/underline.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.code() }"
							@click="commands.code"
						>
							<img class="icon" src="@/assets/images/icons/code.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.paragraph() }"
							@click="commands.paragraph"
						>
							<img class="icon" src="@/assets/images/icons/paragraph.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.heading({ level: 1 }) }"
							@click="commands.heading({ level: 1 })"
						>
							H1
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.heading({ level: 2 }) }"
							@click="commands.heading({ level: 2 })"
						>
							H2
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.heading({ level: 3 }) }"
							@click="commands.heading({ level: 3 })"
						>
							H3
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.bullet_list() }"
							@click="commands.bullet_list"
						>
							<img class="icon" src="@/assets/images/icons/ul.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.ordered_list() }"
							@click="commands.ordered_list"
						>
							<img class="icon" src="@/assets/images/icons/ol.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.blockquote() }"
							@click="commands.blockquote"
						>
							<img class="icon" src="@/assets/images/icons/quote.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							:class="{ 'is-active': isActive.code_block() }"
							@click="commands.code_block"
						>
							<img class="icon" src="@/assets/images/icons/code.svg" />
						</button>
						<button
							type="button"
							class="menubar__button"
							@click="showImagePrompt(commands.image)"
						>
							<img class="icon" src="@/assets/images/icons/image.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							@click="commands.horizontal_rule"
						>
							<img class="icon" src="@/assets/images/icons/hr.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							@click="commands.undo"
						>
							<img class="icon" src="@/assets/images/icons/undo.svg" />
						</button>

						<button
							type="button"
							class="menubar__button"
							@click="commands.redo"
						>
							<img class="icon" src="@/assets/images/icons/redo.svg" />
						</button>
					</div>
				</editor-menu-bar>

				<editor-content class="editor__content" :editor="editor" />
			</div>
		</section>
	</form>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
	Blockquote,
	CodeBlock,
	HardBreak,
	Heading,
	HorizontalRule,
	OrderedList,
	BulletList,
	ListItem,
	TodoItem,
	TodoList,
	Bold,
	Code,
	Italic,
	Link,
	Strike,
	Underline,
	History,
	Image,
} from 'tiptap-extensions';
import Button from '@/components/common/Button.vue';
import { submitArticle } from '@/api/article.js';

export default {
	components: {
		EditorContent,
		EditorMenuBar,
		Button,
	},
	data() {
		return {
			editor: null,
			title: '',
		};
	},
	mounted() {
		this.editor = new Editor({
			extensions: [
				new Blockquote(),
				new BulletList(),
				new CodeBlock(),
				new HardBreak(),
				new Heading({ levels: [1, 2, 3] }),
				new HorizontalRule(),
				new ListItem(),
				new Image(),
				new OrderedList(),
				new TodoItem(),
				new TodoList(),
				new Link(),
				new Bold(),
				new Code(),
				new Italic(),
				new Strike(),
				new Underline(),
				new History(),
			],
			content: '',
		});
	},
	methods: {
		showImagePrompt(command) {
			const src = prompt('Enter the url of your image here');
			if (src !== null) {
				command({ src });
			}
		},
		async submit() {
			try {
				const res = await submitArticle({
					title: this.title,
					content: this.editor.getHTML(),
				});
				if (res.status === 201) {
					alert('작성완료');
					this.$router.push({
						name: 'ArticleDetail',
						params: {
							ariticleId: res.data.id,
						},
					});
				}
			} catch (error) {
				if (error.response) {
					if (error.response.status === 400) {
						alert('잘못된 요청입니다.');
					} else if (error.response.status === 500) {
						alert('서버가 요청을 처리할 수 없습니다.');
					} else if (error.response.status === 401) {
						alert('로그인 정보를 확인해주세요.');
					} else {
						alert(
							`오류입니다. (status: ${error.response.status}) 문의해주세요.`,
						);
					}
				} else {
					alert(error);
				}
			}
		},
	},
	beforeDestroy() {
		this.editor.destroy();
	},
};
</script>

<style lang="scss">
.icon {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	width: 0.8rem;
	height: 0.8rem;
	margin: 0 0.3rem;
	top: -0.05rem;
	fill: currentColor;

	&__svg {
		display: inline-block;
		vertical-align: top;
		width: 100%;
		height: 100%;
	}

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}
}

// svg sprite
body > svg,
.icon use > svg,
symbol {
	path,
	rect,
	circle,
	g {
		fill: currentColor;
		stroke: none;
	}

	*[d='M0 0h24v24H0z'] {
		display: none;
	}
}

.articleform-wrap {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	box-shadow: 0 2px 6px 0 rgba(68, 67, 68, 0.4);
	border-left: 5px solid $green;
	border-radius: 4px;
	.articleform-title__input {
		width: 100%;
		border-bottom: 1px solid black;
		margin-bottom: 30px;
		height: 30px;
	}
}
.editor {
	@import '~@/assets/sass/main.scss';
	margin: 0;
	width: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	.editor__content {
		width: 100%;
		height: 400px;
		overflow-y: scroll;
	}
}

.head-label {
	display: block;
}
.articleform-head {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 0.5rem;
	h2 {
		margin-bottom: 0;
	}
}
</style>
