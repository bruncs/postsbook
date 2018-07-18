import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';

import { signup } from './user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.SIGNUP_REQUEST, signup)]);
}
