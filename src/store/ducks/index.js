import { combineReducers } from 'redux';

import user from './user';
import feed from './feed';
import profile from './profile';
import friendship from './friendship';
import post from './post';
import like from './like';

// TODO: Criar duck + saga de error handling

export default combineReducers({
  user,
  feed,
  profile,
  friendship,
  post,
  like,
});
