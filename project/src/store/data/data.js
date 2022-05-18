import { ActionType } from '../action';

const initialState = {
  offers: [],
  users: [],
  comments: [],
  offersNearby: [],
  activeOffer: null,
  idActiveCard: 0,
  isOffersLoaded: false,
  isOfferItemLoaded: false,
  isCommentsLoaded: false,
  isOffersNearbyLoaded: false,
  url: '',
};

const data = (state = initialState, action) => {
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

    case ActionType.SET_ID_ACTIVE_CARD:
      return {
        ...state,
        idActiveCard: action.payload,
      };

    case ActionType.REDIRECT_TO_ROUTE:
      return {
        ...state,
        url: action.payload,
      };

    default:
      return state;
  }
};

export { data };
