import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';

import { signup, signin } from './user';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SIGNUP_REQUEST, signup),
    takeLatest(UserTypes.SIGNIN_REQUEST, signin),
  ]);
}
