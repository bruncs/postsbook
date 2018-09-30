import { combineReducers } from 'redux';

import user, { Types as UserTypes } from './user';
import feed from './feed';
import profile from './profile';
import friendship from './friendship';
import post from './post';
import like from './like';

// TODO: Criar duck + saga de error handling

const appReducer = combineReducers({
  user,
  feed,
  profile,
  friendship,
  post,
  like,
});

const rootReducer = (state, action) => {
  let currentState = state;

  // Em caso de logout ou solicitação de registro, limpa o estado e o localStorage
  if (action.type === UserTypes.SIGNOUT_SUCCESS) {
    try {
      Object.keys(state).forEach((key) => {
        localStorage.removeItem(`persist:${key}`);
      });
      currentState = undefined;
    } catch (err) {
      return null;
    }
  }

  return appReducer(currentState, action);
};

export default rootReducer;
