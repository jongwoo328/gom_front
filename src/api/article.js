import { article } from './index';

function fetchArticle(articleId) {
	return article.get(`/${articleId}`);
}

export { fetchArticle };
