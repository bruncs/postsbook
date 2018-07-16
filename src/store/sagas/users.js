import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* signup() {
  try {
    const response = yield call(api.post, '/signup');

    yield put(UserActions.signupSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
