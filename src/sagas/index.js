import { fork } from 'redux-saga/effects';

import { watchArticles } from '../features/articles/state/sagas';

export default function* rootSaga() {
  yield fork(watchArticles);
}

