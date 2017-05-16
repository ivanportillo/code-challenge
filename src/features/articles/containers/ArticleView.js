import { connect } from 'react-redux';

import ArticleView from '../components/ArticleView';
import { fetchArticle } from '../actions';

const mapStateToProps = state => ({
  article: state.articles.article,
});

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
