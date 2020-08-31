import { article } from './index';

function fetchArticle(articleId) {
	return article.get(`${articleId}/`);
}

function createComment(articleId, commentData) {
	return article.post(`${articleId}/comment/`, commentData);
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

export {
	fetchArticle,
	createComment,
	submitArticle,
	bookmarkArticle,
	deleteComment,
};
