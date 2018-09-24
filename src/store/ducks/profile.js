// TYPES
export const Types = {
  PROFILE_REQUEST: 'profile/PROFILE_REQUEST',
  PROFILE_SUCCESS: 'profile/PROFILE_SUCCESS',
  PROFILE_FAILURE: 'profile/PROFILE_FAILURE',
};

// INITIAL STATE
const INITIAL_STATE = {
  data: [],
  postsLoading: false,
};

// REDUCER
export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PROFILE_REQUEST:
      return { ...state, postsLoading: true };
    case Types.PROFILE_SUCCESS:
      return { ...state, postsLoading: false, data: action.payload.data };
    case Types.PROFILE_FAILURE:
      return { ...state, postsLoading: false, errors: action.payload.errors };
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  profileRequest: id => ({
    type: Types.PROFILE_REQUEST,
    payload: { id },
  }),

  profileSuccess: data => ({
    type: Types.PROFILE_SUCCESS,
    payload: { data },
  }),

  profileFailure: errors => ({
    type: Types.PROFILE_FAILURE,
    payload: { errors },
  }),
};
