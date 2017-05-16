import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleView extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    fetchArticle: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  };
  componentWillMount() {
    this.props.fetchArticle(this.props.match.params.articleId);
  }

  render() {
    const { article } = this.props;
    return (
      <div>
        {article ? article.title : null}
      </div>
    );
  }
}

export default ArticleView;
