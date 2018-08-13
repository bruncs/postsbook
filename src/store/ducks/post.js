// TYPES
export const Types = {
  PUBLISH_REQUEST: 'post/PUBLISH_REQUEST',
  PUBLISH_SUCCESS: 'post/PUBLISH_SUCCESS',
  PUBLISH_FAILURE: 'post/PUBLISH_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  publishing: false,
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
};
