import { ActionType } from './action';
import { DEFAULT_CITY } from '../constants/common';
import offers from '../mocks/offers';
import users from '../mocks/users';
import comments from '../mocks/comments';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers,
  users,
  comments,
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
    default:
      return state;
  }
};

export { reducer };
