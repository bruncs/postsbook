import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { Types as FeedTypes } from '../ducks/feed';
import { Types as FriendshipTypes } from '../ducks/friendship';

import { signup, signin, signout } from './user';
import { getPosts } from './feed';
import { getList } from './friendship';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SIGNUP_REQUEST, signup),
    takeLatest(UserTypes.SIGNIN_REQUEST, signin),
    takeLatest(UserTypes.SIGNOUT_REQUEST, signout),
    takeLatest(FeedTypes.POSTS_REQUEST, getPosts),
    takeLatest(FriendshipTypes.LISTREQS_REQUEST, getList),
  ]);
}
