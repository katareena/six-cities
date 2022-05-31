import { ui } from './ui';
import { changeCity, clickOnSortMenu, changeSortingValue, postedComment } from '../action';
import { DEFAULT_CITY, DEFAULT_SORTING } from '../../constants/common';

const state = {
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

describe('Reducer: ui', () => {
  it('without additional parametrs should return initial state', () => {
    expect(ui(undefined, {}))
      .toEqual({...state});
  });

  it('should change current city with a given value', () => {
    expect(ui(state, changeCity('Dusseldorf')))
      .toEqual({...state, activeCity: 'Dusseldorf'});
  });

  it('should change current state sorting menu', () => {
    expect(ui(state, clickOnSortMenu(true)))
      .toEqual({...state, isOpenSortMenu: true});
  });

  it('should change current sorting value with a given value', () => {
    expect(ui(state, changeSortingValue('Price: low to high')))
      .toEqual({...state, activeSortingValue: 'Price: low to high'});
  });

  it('should update comment state with the given data', () => {
    expect(ui(state, postedComment({
      isPostedComment: true,
      comment: '',
      rating: 1,
      isErrorPostedComment: false,
    })))
      .toEqual({...state, postedComment: {
        isPostedComment: true,
        comment: '',
        rating: 1,
        isErrorPostedComment: false,
      }});
  });
});
