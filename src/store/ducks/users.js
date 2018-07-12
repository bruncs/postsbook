// TYPES
export const Types = {
  SIGNUP_REQUEST: 'users/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'users/SIGNUP_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

// REDUCER
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNUP_REQUEST:
      return { ...state, loading: true };
    case Types.SIGNUP_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  signupRequest: () => ({ type: Types.SIGNUP_REQUEST }),

  signupSuccess: data => ({
    type: Types.SIGNUP_SUCCESS,
    payload: { data },
  }),
};
