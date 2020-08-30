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

export { fetchArticle, createComment, bookmarkArticle };
