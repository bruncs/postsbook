import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/user';

export function* signup(action) {
  try {
    const response = yield call(api.post, '/signup', action.payload.data);

    yield put(UserActions.signupSuccess(response.data));
  } catch (err) {
    yield put(UserActions.signupFailure(err.response.data));
  }
}

export function* signin(action) {
  try {
    const response = yield call(api.post, '/signin', action.payload.data);

    yield put(UserActions.signinSuccess(response.data));
  } catch (err) {
    yield put(UserActions.signinFailure(err.response.data));
  }
}
