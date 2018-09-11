import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { Types as FeedTypes } from '../ducks/feed';
import { Types as FriendshipTypes } from '../ducks/friendship';
import { Types as PostTypes } from '../ducks/post';
import { Types as LikeTypes } from '../ducks/like';

import { signup, signin, signout } from './user';
import { getPosts } from './feed';
import { getReqsList, getFriendsList } from './friendship';
import { publish, remove } from './post';
import { toggle } from './like';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SIGNUP_REQUEST, signup),
    takeLatest(UserTypes.SIGNIN_REQUEST, signin),
    takeLatest(UserTypes.SIGNOUT_REQUEST, signout),
    takeLatest(FeedTypes.POSTS_REQUEST, getPosts),
    takeLatest(FriendshipTypes.LISTREQS_REQUEST, getReqsList),
    takeLatest(FriendshipTypes.LISTFRIENDS_REQUEST, getFriendsList),
    takeLatest(PostTypes.PUBLISH_REQUEST, publish),
    takeLatest(PostTypes.REMOVE_REQUEST, remove),
    takeLatest(LikeTypes.TOGGLE_REQUEST, toggle),
  ]);
}
