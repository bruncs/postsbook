// TYPES
export const Types = {
  PUBLISH_REQUEST: 'post/PUBLISH_REQUEST',
  PUBLISH_SUCCESS: 'post/PUBLISH_SUCCESS',
  PUBLISH_FAILURE: 'post/PUBLISH_FAILURE',
  REMOVE_REQUEST: 'post/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'post/REMOVE_SUCCESS',
  REMOVE_FAILURE: 'post/REMOVE_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  publishing: false,
  removing: false,
};

// REDUCERS
export default function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PUBLISH_REQUEST:
      return { ...state, publishing: true };
    case Types.PUBLISH_SUCCESS:
      return { ...state, publishing: false };
    case Types.PUBLISH_FAILURE:
      return { ...state, publishing: false, errors: action.payload.errors };
    case Types.REMOVE_REQUEST:
      return { ...state, removing: true };
    case Types.REMOVE_SUCCESS:
      return { ...state, removing: false };
    case Types.REMOVE_FAILURE:
      return { ...state, removing: false, errors: action.payload.errors };
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  publishRequest: data => ({
    type: Types.PUBLISH_REQUEST,
    payload: { data },
  }),
  publishSuccess: () => ({
    type: Types.PUBLISH_SUCCESS,
  }),
  publishFailure: errors => ({
    type: Types.PUBLISH_FAILURE,
    payload: { errors },
  }),
  removeRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: { id },
  }),
  removeSuccess: () => ({
    type: Types.REMOVE_SUCCESS,
  }),
  removeFailure: errors => ({
    type: Types.REMOVE_FAILURE,
    payload: { errors },
  }),
};
