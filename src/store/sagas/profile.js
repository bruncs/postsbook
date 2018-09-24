import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { localStoragePrefix } from '../../config';

import { Creators as ProfileActions } from '../ducks/profile';

export function* getPosts(action) {
  try {
    const token = localStorage.getItem(`${localStoragePrefix}token`);
    const response = yield call(
      api.post,
      '/profile',
      { id: action.payload.id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    yield put(ProfileActions.profileSuccess(response.data));
  } catch (err) {
    yield put(ProfileActions.profileFailure(err.response.data));
  }
}
