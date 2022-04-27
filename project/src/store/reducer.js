import { ActionType } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING, AuthorizationStatus } from '../constants/common';

const initialState = {
  offers: [],
  users: [],
  comments: [],
  nearby: [],
  activeCity: DEFAULT_CITY,
  idActiveCard: 0,
  isOpenSortMenu: false,
  activeSortingValue: DEFAULT_SORTING,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isOffersLoaded: false,
  isCommentsLoaded: false,
  url: '',
  authUser: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        idActiveCard: action.payload,
      };

    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearby: action.payload,
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

    case ActionType.SET_ID_ACTIVE_CARD:
      return {
        ...state,
        idActiveCard: action.payload,
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

    case ActionType.REDIRECT_TO_ROUTE:
      return {
        ...state,
        url: action.payload,
      };

    case ActionType.SET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };

    default:
      return state;
  }
};

export { reducer };
