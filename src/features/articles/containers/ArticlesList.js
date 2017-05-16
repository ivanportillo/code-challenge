import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import ArticlesList from '../components/ArticlesList';

const mapStateToProps = state => ({
  articles: state.articles.articles,
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
