import { article } from './index';

function fetchArticle(articleId) {
	return article.get(`${articleId}/`);
}

function createComment(articleId, commentData) {
	return article.post(`${articleId}/comment/`, commentData);
}

function bookmarkArticle(articleId) {
	return article.post(`${articleId}/bookmark/`);
}

function submitArticle(articleData) {
	return article.post('', articleData);
}

function fetchArticleList(page) {
	return article.get('', {
		params: {
			page: page,
		},
	});
}

export {
	fetchArticle,
	createComment,
	submitArticle,
	bookmarkArticle,
	fetchArticleList,
};
