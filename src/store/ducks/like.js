/**
 * Types
 */
export const Types = {
  TOGGLE_REQUEST: 'like/TOGGLE_REQUEST',
  TOGGLE_SUCCESS: 'like/TOGGLE_SUCCESS',
  TOGGLE_FAILURE: 'like/TOGGLE_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  postId: '',
};

export default function like(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_REQUEST:
      return { ...state };
    case Types.TOGGLE_SUCCESS:
      return { ...state };
    case Types.TOGGLE_FAILURE:
      return { ...state, errors: action.payload.errors };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  likeRequest: postId => ({
    type: Types.TOGGLE_REQUEST,
    payload: { postId },
  }),
  likeSuccess: () => ({
    type: Types.TOGGLE_SUCCESS,
  }),
  likeFailure: errors => ({
    type: Types.TOGGLE_FAILURE,
    payload: { errors },
  }),
};
