// TYPES
export const Types = {
  SIGNUP_REQUEST: 'user/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'user/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'user/SIGNUP_FAILURE',
  SIGNIN_REQUEST: 'user/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'user/SIGNIN_SUCCESS',
  SIGNIN_FAILURE: 'user/SIGNIN_FAILURE',
  SIGNOUT: 'user/SIGNOUT',
};

const INITIAL_STATE = {
  data: [],
  signupLoading: false,
  signinLoading: false,
  isAuthenticated: false,
};

// REDUCER
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNUP_REQUEST:
      return { ...state, signupLoading: true };
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        data: action.payload.data,
        isAuthenticated: true,
      };
    case Types.SIGNUP_FAILURE:
      return { ...state, signupLoading: false, errors: action.payload.errors };
    case Types.SIGNIN_REQUEST:
      return { ...state, signinLoading: true };
    case Types.SIGNIN_SUCCESS:
      return {
        ...state,
        signinLoading: false,
        data: action.payload.data,
        isAuthenticated: true,
      };
    case Types.SIGNIN_FAILURE:
      return { ...state, signinLoading: false, errors: action.payload.errors };
    case Types.SIGNOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  signupRequest: data => ({
    type: Types.SIGNUP_REQUEST,
    payload: { data },
  }),

  signupSuccess: data => ({
    type: Types.SIGNUP_SUCCESS,
    payload: { data },
  }),

  signupFailure: errors => ({
    type: Types.SIGNUP_FAILURE,
    payload: { errors },
  }),

  signinRequest: data => ({
    type: Types.SIGNIN_REQUEST,
    payload: { data },
  }),

  signinSuccess: data => ({
    type: Types.SIGNIN_SUCCESS,
    payload: { data },
  }),

  signinFailure: errors => ({
    type: Types.SIGNIN_FAILURE,
    payload: { errors },
  }),

  signout: () => ({
    type: Types.SIGNOUT,
  }),
};
