import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/users';

import { signup } from './users';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.SIGNUP_REQUEST, signup)]);
}
