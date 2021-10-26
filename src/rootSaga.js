import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import { fetchSucceded, FETCH_USERS_REQUESTED } from './users/containers/redux'

function* fetchUsers(action) {
  try {
    const users = yield fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json());

    yield put(fetchSucceded(users.slice(0, 3)));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
};

function* usersWatcher() {
  yield takeEvery(FETCH_USERS_REQUESTED, fetchUsers);
}

export default function* rootSaga() {
  yield all([
    usersWatcher(),
  ])
}