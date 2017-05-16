import axios from 'axios';
import * as queries from './queries';
const GRAPHQL_BASE_URL = 'http://localhost:4000/graphql';

export const fetchArticles = () => axios.post(GRAPHQL_BASE_URL, { query: queries.ARTICLES_QUERY });
export const fetchArticle = id =>
  axios.post(GRAPHQL_BASE_URL, { query: queries.ARTICLE_QUERY(id) });
