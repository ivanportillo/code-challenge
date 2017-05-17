import * as constants from './constants';
import * as actions from './index';

describe('Articles actions', () => {
  it('should create an action to fetch articles', () => {
    const expectedAction = { type: constants.FETCH_ARTICLES };
    expect(actions.fetchArticles()).toEqual(expectedAction);
  });

  it('should create an action to receive articles', () => {
    const article = {
      title: 'title',
      author: 'author',
      excerpt: 'excerpt',
    };
    const articles = [article, article, article];
    const expectedAction = {
      type: constants.RECEIVE_ARTICLES,
      articles,
    };
    expect(actions.receiveArticles(articles)).toEqual(expectedAction);
  });

  it('should create an action to receive an error when articles fetching fails', () => {
    const error = 'error';
    const expectedAction = { type: constants.RECEIVE_ARTICLES_FAILED, error };
    expect(actions.receiveArticlesFailed(error)).toEqual(expectedAction);
  });

  it('should create an action to fetch an article', () => {
    const id = '33333';
    const expectedAction = { type: constants.FETCH_ARTICLE, id };
    expect(actions.fetchArticle(id)).toEqual(expectedAction);
  });

  it('should create an action to receive an article', () => {
    const article = {
      title: 'title',
      author: 'author',
      excerpt: 'excerpt',
      content: 'content',
      published: true,
      tags: ['tag1', 'tag2'],
    };
    const expectedAction = { type: constants.RECEIVE_ARTICLE, article };
    expect(actions.receiveArticle(article)).toEqual(expectedAction);
  });

  it('should create an action to receive an error when the article fetching fails', () => {
    const error = 'error';
    const expectedAction = { type: constants.RECEIVE_ARTICLE_FAILED, error };
    expect(actions.receiveArticleFailed(error)).toEqual(expectedAction);
  });
});
