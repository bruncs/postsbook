import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PostActions } from '../ducks/post';

export function* publish(action) {
  try {
    yield call(api.post, '/posts', action.payload.data);

    yield put(PostActions.publishSuccess());
  } catch (err) {
    yield put(PostActions.publishFailure(err.response.data));
  }
}
