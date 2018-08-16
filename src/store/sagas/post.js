import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { localStoragePrefix } from '../../config';

import { Creators as PostActions } from '../ducks/post';

export function* publish(action) {
  try {
    const token = localStorage.getItem(`${localStoragePrefix}token`);
    yield call(api.post, '/posts', action.payload.data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(PostActions.publishSuccess());
  } catch (err) {
    yield put(PostActions.publishFailure(err.response.data));
  }
}
