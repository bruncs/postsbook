import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { localStoragePrefix } from '../../config';

import { Creators as ProfileActions } from '../ducks/profile';

export function* getPosts() {
  try {
    const token = localStorage.getItem(`${localStoragePrefix}token`);
    const response = yield call(api.get, '/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(ProfileActions.postsSuccess(response.data));
  } catch (err) {
    yield put(ProfileActions.postsFailure(err.response.data));
  }
}
