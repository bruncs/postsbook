// TYPES
export const Types = {
  POSTS_REQUEST: 'feed/POSTS_REQUEST',
  POSTS_SUCCESS: 'feed/POSTS_SUCCESS',
  POSTS_FAILURE: 'feed/POSTS_FAILURE',
};

// INITIAL STATE
const INITIAL_STATE = {
  data: [],
  postsLoading: false,
};

// REDUCER
export default function feed(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POSTS_REQUEST:
      return { ...state, postsLoading: true };
    case Types.POSTS_SUCCESS:
      return { ...state, postsLoading: false, data: action.payload.data };
    case Types.POSTS_FAILURE:
      return { ...state, postsLoading: false, errors: action.payload.errors };
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  postsRequest: data => ({
    type: Types.POSTS_REQUEST,
    payload: { data },
  }),

  postsSuccess: data => ({
    type: Types.POSTS_SUCCESS,
    payload: { data },
  }),

  postsFailure: errors => ({
    type: Types.POSTS_FAILURE,
    payload: { errors },
  }),
};
