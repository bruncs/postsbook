import { combineReducers } from 'redux';

import user from './user';
import feed from './feed';
import friendship from './friendship';

export default combineReducers({
  user,
  feed,
  friendship,
});
