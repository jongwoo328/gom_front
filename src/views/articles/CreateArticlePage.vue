<template>
	<form class="articleform" @submit.prevent="submitArticle">
		<section class="articleform-head">
			<h2>게시글 생성</h2>
			<div class="articleform-head__btnbox">
				<button
					type="button"
					class="articleform-head__cancle"
					@click="$router.go(-1)"
				>
					취소
				</button>
				<button type="submit" class="articleform-head__submit">제출</button>
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
							class="menubar__button"
							:class="{ 'is-active': isActive.bold() }"
							@click="commands.bold"
						>
							<img class="icon" src="@/assets/images/icons/bold.svg" />
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.italic() }"
							@click="commands.italic"
						>
							<img class="icon" src="@/assets/images/icons/italic.svg" />
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.strike() }"
							@click="commands.strike"
						>
							<img class="icon" src="@/assets/images/icons/strike.svg" />
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.underline() }"
							@click="commands.underline"
						>
							<img class="icon" src="@/assets/images/icons/underline.svg" />
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.code() }"
							@click="commands.code"
						>
							<img class="icon" src="@/assets/images/icons/code.svg" />
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.paragraph() }"
							@click="commands.paragraph"
						>
							<img class="icon" src="@/assets/images/icons/paragraph.svg" />
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.heading({ level: 1 }) }"
							@click="commands.heading({ level: 1 })"
						>
							H1
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.heading({ level: 2 }) }"
							@click="commands.heading({ level: 2 })"
						>
							H2
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.heading({ level: 3 }) }"
							@click="commands.heading({ level: 3 })"
						>
							H3
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.bullet_list() }"
							@click="commands.bullet_list"
						>
							<img class="icon" src="@/assets/images/icons/ul.svg" />
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.ordered_list() }"
							@click="commands.ordered_list"
						>
							<img class="icon" src="@/assets/images/icons/ol.svg" />
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.blockquote() }"
							@click="commands.blockquote"
						>
							<img class="icon" src="@/assets/images/icons/quote.svg" />
						</button>

						<button
							class="menubar__button"
							:class="{ 'is-active': isActive.code_block() }"
							@click="commands.code_block"
						>
							<img class="icon" src="@/assets/images/icons/code.svg" />
						</button>
						<button
							class="menubar__button"
							@click="showImagePrompt(commands.image)"
						>
							<img class="icon" src="@/assets/images/icons/image.svg" />
						</button>

						<button class="menubar__button" @click="commands.horizontal_rule">
							<img class="icon" src="@/assets/images/icons/hr.svg" />
						</button>

						<button class="menubar__button" @click="commands.undo">
							<img class="icon" src="@/assets/images/icons/undo.svg" />
						</button>

						<button class="menubar__button" @click="commands.redo">
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
export default {
	components: {
		EditorContent,
		EditorMenuBar,
	},
	data() {
		return {
			editor: null,
			title: null,
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
		async submitArticle() {
			const article = { title: this.title, content: this.editor.getHTML() };
			// console.log(this.editor.getHTML());
			console.log(article);
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

	// &.has-align-fix {
	// 	top: -.1rem;
	// }

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
.articleform-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.5rem;
	h2 {
		margin-bottom: 0;
	}
	&__btnbox {
		.articleform-head__cancle {
			width: 50px;
			padding: 0.25rem;
			margin-right: 0.25rem;
			background: white;
			border: 1px solid black;
			&:hover {
				transition: all 0.25s ease;
				background: black;
				color: white;
			}
		}
		.articleform-head__submit {
			width: 50px;
			padding: 0.25rem;
			margin-right: 0.25rem;
			background: $green;
			color: white;
			/* outline: none; */
			border: 1px solid black;
			&:hover {
				transition: all 0.25s ease;
				background: white;
				color: black;
			}
		}
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
	}
}
.editor {
	margin: 0;
	width: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	.editor__content {
		width: 100%;
		height: 400px;
		overflow-y: scroll;
		/* overflow-x: hidden; */
	}
	p {
		margin: 0;
	}
}
.menubar {
	/* border-bottom: 1px solid black; */
}
.head-label {
	display: block;
}
</style>
