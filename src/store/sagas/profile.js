import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { localStoragePrefix } from '../../config';

import { Creators as ProfileActions } from '../ducks/profile';

export function* getPosts(action) {
  try {
    const token = localStorage.getItem(`${localStoragePrefix}token`);
    const response = yield call(api.post, '/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      id: action.payload.id,
    });

    yield put(ProfileActions.postsSuccess(response.data));
  } catch (err) {
    yield put(ProfileActions.postsFailure(err.response.data));
  }
}
