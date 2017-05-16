import { combineReducers } from 'redux';
import * as constants from '../actions/constants';

function articles(state = [], action) {
  switch (action.type) {
    case constants.RECEIVE_ARTICLES:
      return action.articles;
    default:
      return state;
  }
}

function article(state = null, action) {
  switch (action.type) {
    case constants.RECEIVE_ARTICLE:
      return action.article;
    default:
      return state;
  }
}

const articlesReducer = combineReducers({
  article,
  articles,
});

export default articlesReducer;

