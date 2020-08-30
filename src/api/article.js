import { article } from './index';

function fetchArticle(articleId) {
	return article.get(`${articleId}/`);
}

function createComment(articleId, commentData) {
	return article.post(`${articleId}/comment/`, commentData);
}
export { fetchArticle, createComment };
