import { ActionType } from '../action';
import { AuthorizationStatus } from '../../constants/common';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authUser: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: false,
    name: '',
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    case ActionType.SET_AUTH_USER:
      return {
        ...state,
        authUser: {
          avatarUrl: action.payload.avatarUrl,
          email: action.payload.email,
          id: action.payload.id,
          isPro: action.payload.isPro,
          name: action.payload.name,
        },
      };

    default:
      return state;
  }
};

export { user };
