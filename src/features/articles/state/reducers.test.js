import articlesReducer from './reducers';
import * as actions from '../actions';

const article = {
  title: 'title',
  author: 'author',
  exceprt: 'excerpt',
  content: 'content',
  published: true,
  tags: ['tag1', 'tag2'],
};

const articles = [{
  title: 'title',
  author: 'author',
  excerpt: 'excerpt',
}, {
  title: 'title',
  author: 'author',
  excerpt: 'excerpt',
}, {
  title: 'title',
  author: 'author',
  excerpt: 'excerpt',
}];

describe('Articles reducers', () => {
  it('should return the initial state', () => {
    expect(
      articlesReducer(undefined, {}),
    ).toEqual({
      articles: [],
      article: null,
    });
  });

  it('should handle RECEIVE_ARTICLES', () => {
    expect(
      articlesReducer({
        articles: [],
        article: null,
      }, actions.receiveArticles(articles)),
    ).toEqual({
      articles,
      article: null,
    });
  });

  it('should handle RECEIVE_ARTICLE', () => {
    expect(
      articlesReducer({
        articles: [],
        article: null,
      }, actions.receiveArticle(article)),
    ).toEqual({
      articles: [],
      article,
    });
  });
});
