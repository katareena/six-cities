import { ActionType } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING } from '../constants/common';
import offers from '../mocks/offers';
import users from '../mocks/users';
import comments from '../mocks/comments';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers,
  users,
  comments,
  activeSortingValue: DEFAULT_SORTING,
  isOpenSortMenu: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.ADD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.CHANGE_SORTING_VALUE:
      return {
        ...state,
        activeSortingValue: action.payload,
      };
    case ActionType.CLICK_ON_SORT_MENU:
      return {
        ...state,
        isOpenSortMenu: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
