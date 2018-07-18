// TYPES
export const Types = {
  SIGNUP_REQUEST: 'user/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'user/SIGNUP_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

// REDUCER
export default function user(state = INITIAL_STATE, action) {
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
