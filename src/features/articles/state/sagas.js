import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import * as constants from '../actions/constants';
import * as actions from '../actions';
import * as requests from '../../../infrastructure/request';

export function* watchArticles() {
  yield all([
    fork(watchFetchArticles),
    fork(watchFetchArticle),
  ]);
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

function* fetchArticleProcess(action) {
  try {
    const { data } = yield call(requests.fetchArticle, action.id);
    if (data.data) {
      const { article } = data.data;
      yield put(actions.receiveArticle(article));

    }
  } catch (e) {
    yield put(actions.receiveArticleFailed(e));
  }
}

function* watchFetchArticles() {
  yield takeEvery(constants.FETCH_ARTICLES, fetchArticlesProcess);
}

function* watchFetchArticle() {
  yield takeEvery(constants.FETCH_ARTICLE, fetchArticleProcess);
}
