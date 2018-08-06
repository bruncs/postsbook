import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FriendshipActions } from '../ducks/friendship';

export function* getList() {
  try {
    const token = localStorage.getItem('token');
    const response = yield call(api.get, '/friends/requests', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(FriendshipActions.listReqsSuccess(response.data));
  } catch (err) {
    yield put(FriendshipActions.listReqsFailure(err.response.data));
  }
}
