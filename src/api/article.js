import { article, articleNoAuth } from './index';

function fetchArticle(articleId) {
	return articleNoAuth.get(`${articleId}/`);
}

function updateArticle(articleId, articleData) {
	return article.patch(`${articleId}/`, articleData);
}

function deleteArticle(articleId) {
	return article.delete(`${articleId}/`);
}
function deleteComment(articleId, commentId) {
	return article.delete(`${articleId}/comment/${commentId}`);
}

function bookmarkArticle(articleId) {
	return article.post(`${articleId}/bookmark/`);
}

function submitArticle(articleData) {
	return article.post('', articleData);
}

function createComment(articleId, commentData) {
	return article.post(`${articleId}/comment/`, commentData);
}

function createCoByComment(articleId, commentId, commentData) {
	return article.post(`${articleId}/comment/${commentId}/`, commentData);
}

function fetchComment(articleId) {
	return articleNoAuth.get(`${articleId}/comment/`);
}

function fetchArticleList(page) {
	return articleNoAuth.get('', {
		params: {
			page: page,
		},
	});
}

export {
	fetchArticle,
	updateArticle,
	deleteArticle,
	createComment,
	submitArticle,
	bookmarkArticle,
	deleteComment,
	fetchComment,
	createCoByComment,
	fetchArticleList,
};
