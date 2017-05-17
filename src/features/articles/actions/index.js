import * as constants from './constants';

export const fetchArticles = () => ({ type: constants.FETCH_ARTICLES });
export const receiveArticles = articles => ({ type: constants.RECEIVE_ARTICLES, articles });
export const receiveArticlesFailed = error => ({ type: constants.RECEIVE_ARTICLES_FAILED, error });

export const fetchArticle = id => ({ type: constants.FETCH_ARTICLE, id });
export const receiveArticle = article => ({ type: constants.RECEIVE_ARTICLE, article });
export const receiveArticleFailed = error => ({ type: constants.RECEIVE_ARTICLE_FAILED, error });
