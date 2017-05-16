import * as constants from './constants';

export const fetchArticles = () => ({ type: constants.FETCH_ARTICLES });
export const receiveArticles = articles => ({ type: constants.RECEIVE_ARTICLES, articles });
export const receiveArticlesFailed = error => ({ type: constants.RECEIVE_ARTICLES_FAILED, error });