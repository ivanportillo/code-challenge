import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ArticleCard from './ArticleCard';

const fakeData = {
  title: 'Article title',
  author: 'Article author',
  excerpt: 'Article excerpt',
};

describe('Article Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ArticleCard
        title={fakeData.title}
        author={fakeData.author}
        excerpt={fakeData.excerpt}
      />, div);
  });

  it('should render an article', () => {
    const article = shallow(
      <ArticleCard
        title={fakeData.title}
        author={fakeData.author}
        excerpt={fakeData.excerpt}
      />);
    expect(article).toMatchSnapshot();
  });
});
