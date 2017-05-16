import * as constants from '../actions/constants';

function articles(state = [], action) {
  switch (action.type) {
    case constants.RECEIVE_ARTICLES:
      return action.articles;
    default:
      return state;
  }
}

export default articles;

