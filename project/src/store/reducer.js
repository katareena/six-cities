import { ActionType } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING, AuthorizationStatus } from '../constants/common';

const initialState = {
  offers: [],
  users: [],
  comments: [],
  offersNearby: [],
  activeOffer: null,
  activeCity: DEFAULT_CITY,
  idActiveCard: 0,
  isOpenSortMenu: false,
  activeSortingValue: DEFAULT_SORTING,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isOffersLoaded: false,
  isOfferItemLoaded: false,
  isCommentsLoaded: false,
  isOffersNearbyLoaded: false,
  url: '',
  authUser: '',
  postedComment: {
    idPostedComment: false,
    comment: '',
    rating: 0,
  },
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

    case ActionType.LOAD_OFFER_ITEM:
      return {
        ...state,
        activeOffer: action.payload,
        isOfferItemLoaded: true,
      };

    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
        isOffersNearbyLoaded: true,
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

    case ActionType.POSTED_COMMENT:
      return {
        ...state,
        postedComment: {
          isPostedComment: action.payload.isPostedComment,
          comment: action.payload.comment,
          rating: action.payload.rating,
        },
      };

    default:
      return state;
  }
};

export { reducer };
