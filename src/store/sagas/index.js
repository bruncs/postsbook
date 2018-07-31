import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { Types as FeedTypes } from '../ducks/feed';

import { signup, signin, signout } from './user';
import { getPosts } from './feed';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SIGNUP_REQUEST, signup),
    takeLatest(UserTypes.SIGNIN_REQUEST, signin),
    takeLatest(UserTypes.SIGNOUT_REQUEST, signout),
    takeLatest(FeedTypes.POSTS_REQUEST, getPosts),
  ]);
}
