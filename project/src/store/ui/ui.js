import { ActionType } from '../action';
import { DEFAULT_CITY, DEFAULT_SORTING } from '../../constants/common';

const initialState = {
  activeCity: DEFAULT_CITY,
  isOpenSortMenu: false,
  activeSortingValue: DEFAULT_SORTING,
  postedComment: {
    isPostedComment: false,
    comment: '',
    rating: 0,
    isErrorPostedComment: false,
  },
};

const ui = (state = initialState, action) => {
  switch (action.type) {
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

    case ActionType.POSTED_COMMENT:
      return {
        ...state,
        postedComment: {
          isPostedComment: action.payload.isPostedComment,
          comment: action.payload.comment,
          rating: action.payload.rating,
          isErrorPostedComment: action.payload.isErrorPostedComment,
        },
      };

    default:
      return state;
  }
};

export { ui };
