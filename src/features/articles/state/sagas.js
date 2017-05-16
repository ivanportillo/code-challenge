import { fork, takeEvery, call, put } from 'redux-saga/effects';
import * as constants from '../actions/constants';
import * as actions from '../actions';
import * as requests from '../../../infrastructure/request';

export function* watchArticles() {
  yield fork(watchFetchFacilities);
}

function* fetchArticlesProcess() {
  try {
    const { data } = yield call(requests.fetchArticles);
    if (data.data) {
      const { articles } = data.data;
      yield put(actions.receiveArticles(articles));

    }
  } catch (e) {
    yield put(actions.receiveArticlesFailed(e));
  }
}

function* watchFetchFacilities() {
  yield takeEvery(constants.FETCH_ARTICLES, fetchArticlesProcess);
}
