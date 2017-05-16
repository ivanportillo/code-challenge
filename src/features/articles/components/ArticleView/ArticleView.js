import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ArticleView.css';

class ArticleView extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      excerpt: PropTypes.string,
      content: PropTypes.string,
      published: PropTypes.boolean,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
    fetchArticle: PropTypes.func.isRequired,
    match: PropTypes.shape({
      isExact: PropTypes.boolean,
      url: PropTypes.string,
      path: PropTypes.string,
      params: PropTypes.objectOf(PropTypes.string),
    }),
  };
  componentWillMount() {
    this.props.fetchArticle(this.props.match.params.articleId);
  }

  render() {
    const { article }  = this.props;
    return (
      <div>
        {article ? <div>
          <div className="Article-title">{article.title}</div>
          <div className="Article-author">{article.author}</div>
          <div className="Article-excerpt">{article.excerpt}</div>
          <div className="Article-content">{article.content}</div>
          <div>Published: {article.published ? 'Yes' : 'No'}</div>
          <div>Tags: {article.tags.toString()}</div>
        </div> : null}
      </div>
    );
  }
}

export default ArticleView;
