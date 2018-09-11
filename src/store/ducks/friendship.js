// TYPES
export const Types = {
  LISTREQS_REQUEST: 'requests/LISTREQS_REQUEST',
  LISTREQS_SUCCESS: 'requests/LISTREQS_SUCCESS',
  LISTREQS_FAILURE: 'requests/LISTREQS_FAILURE',
  LISTFRIENDS_REQUEST: 'friends/LISTFRIENDS_REQUEST',
  LISTFRIENDS_SUCCESS: 'friends/LISTFRIENDS_SUCCESS',
  LISTFRIENDS_FAILURE: 'friends/LISTFRIENDS_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  friends: [],
  requestsLoading: false,
  friendsLoading: false,
};

// REDUCER
export default function friendship(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LISTREQS_REQUEST:
      return { ...state, requestsLoading: true };
    case Types.LISTREQS_SUCCESS:
      return {
        ...state,
        requestsLoading: false,
        data: action.payload.data,
      };
    case Types.LISTREQS_FAILURE:
      return { ...state, requestsLoading: false, errors: action.payload.errors };
    case Types.LISTFRIENDS_REQUEST:
      return { ...state, friendsLoading: true };
    case Types.LISTFRIENDS_SUCCESS:
      return {
        ...state,
        friendsLoading: false,
        friends: action.payload.data,
      };
    case Types.LISTFRIENDS_FAILURE:
      return { ...state, friendsLoading: false, errors: action.payload.errors };
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  listReqsRequest: () => ({
    type: Types.LISTREQS_REQUEST,
  }),

  listReqsSuccess: data => ({
    type: Types.LISTREQS_SUCCESS,
    payload: { data },
  }),

  listReqsFailure: errors => ({
    type: Types.LISTREQS_FAILURE,
    payload: { errors },
  }),

  listFriendsRequest: () => ({
    type: Types.LISTFRIENDS_REQUEST,
  }),

  listFriendsSuccess: data => ({
    type: Types.LISTFRIENDS_SUCCESS,
    payload: { data },
  }),

  listFriendsFailure: errors => ({
    type: Types.LISTFRIENDS_FAILURE,
    payload: { errors },
  }),
};
