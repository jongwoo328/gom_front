import { article, articleNoAuth } from './index';

function fetchArticle(articleId) {
	return articleNoAuth.get(`${articleId}/`);
}

function updateArticle(articleId) {
	return article.patch(`${articleId}/`);
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
<<<<<<< HEAD
	return article.get(`${articleId}/comment/`);
=======
	return articleNoAuth.get(`${articleId}/comment/`);
>>>>>>> e9eeba552d58fb68e56067282fdceb2e2e8a7550
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
