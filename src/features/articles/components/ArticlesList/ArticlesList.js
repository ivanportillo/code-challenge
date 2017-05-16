import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '../../../../core/components/layout/Grid';
import ArticleCard from '../ArticleCard';

class ArticlesList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchArticles: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.fetchArticles();
  }

  renderCards = articles => articles.map(article => (
    <ArticleCard key={article.title} {...article} />
  ));

  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles.length ?
          <Grid columns={3} gutter={8} spaceBetween={8}>
            {this.renderCards(articles)}
          </Grid> : <p>Loading...</p>
        }
      </div>
    );
  }
}

export default ArticlesList;
