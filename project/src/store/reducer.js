import { ActionType } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING, AuthorizationStatus } from '../constants/common';

const initialState = {
  offers: [],
  users: [],
  comments: [],
  activeCity: DEFAULT_CITY,
  isOpenSortMenu: false,
  activeSortingValue: DEFAULT_SORTING,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isOffersLoaded: false,
  isCommentsLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_OFFERS:
      return {
        ...state, // rest operator - collapses elements into an array
        offers: action.payload,
      };

    case ActionType.ADD_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ActionType.ADD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };

    case ActionType.CLICK_ON_SORT_MENU:
      return {
        ...state,
        isOpenSortMenu: action.payload,
      };

    case ActionType.CHANGE_SORTING_VALUE:
      return {
        ...state,
        activeSortingValue: action.payload,
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true,
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };

    case ActionType.LOAD_ROOM_ITEM:
      return {
        ...state,
        selectedRoom: action.payload,
      };

    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearby: action.payload,
      };

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

    default:
      return state;
  }
};

export { reducer };
