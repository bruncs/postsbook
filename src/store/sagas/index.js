import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { Types as FeedTypes } from '../ducks/feed';
import { Types as FriendshipTypes } from '../ducks/friendship';
import { Types as PostTypes } from '../ducks/post';

import { signup, signin, signout } from './user';
import { getPosts } from './feed';
import { getReqsList } from './friendship';
import { publish } from './post';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SIGNUP_REQUEST, signup),
    takeLatest(UserTypes.SIGNIN_REQUEST, signin),
    takeLatest(UserTypes.SIGNOUT_REQUEST, signout),
    takeLatest(FeedTypes.POSTS_REQUEST, getPosts),
    takeLatest(FriendshipTypes.LISTREQS_REQUEST, getReqsList),
    takeLatest(PostTypes.PUBLISH_REQUEST, publish),
  ]);
}
