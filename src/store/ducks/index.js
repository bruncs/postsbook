import { combineReducers } from 'redux';

import user from './user';
import feed from './feed';
import friendship from './friendship';
import post from './post';

export default combineReducers({
  user,
  feed,
  friendship,
  post,
});
