import { combineReducers } from 'redux';

import articlesReducer from '../features/articles/state/reducers';

const rootReducer = combineReducers({
  articles: articlesReducer,
});

export default rootReducer;

