import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { localStoragePrefix } from '../../config';

import { Creators as LikeActions } from '../ducks/like';

export function* toggle(action) {
  try {
    const token = localStorage.getItem(`${localStoragePrefix}token`);
    yield call(api.post, `/like/${action.payload.postId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(LikeActions.likeSuccess());
  } catch (err) {
    yield put(LikeActions.likeFailure(err.response.data));
  }
}
