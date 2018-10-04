import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { localStoragePrefix } from '../../config';

import { Creators as FriendshipActions } from '../ducks/friendship';

export function* getReqsList() {
  try {
    const token = localStorage.getItem(`${localStoragePrefix}token`);
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

export function* getFriendsList() {
  try {
    const token = localStorage.getItem(`${localStoragePrefix}token`);
    const response = yield call(api.get, '/friends/list', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(FriendshipActions.listFriendsSuccess(response.data));
  } catch (err) {
    yield put(FriendshipActions.listFriendsFailure(err.response.data));
  }
}

export function* acceptRequest(action) {
  try {
    const token = localStorage.getItem(`${localStoragePrefix}token`);
    yield call(api.get, `/friends/accept/${action.payload.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(FriendshipActions.acceptSuccess());
  } catch (err) {
    yield put(FriendshipActions.listReqsFailure(err.response.data));
  }
}
