import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { localStoragePrefix } from '../../config';

import { Creators as FeedActions } from '../ducks/feed';

export function* getPosts() {
  try {
    const token = localStorage.getItem(`${localStoragePrefix}token`);
    const response = yield call(api.get, '/feed', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(FeedActions.postsSuccess(response.data));
  } catch (err) {
    yield put(FeedActions.postsFailure(err.response.data));
  }
}
