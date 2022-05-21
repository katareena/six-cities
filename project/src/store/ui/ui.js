import { createReducer } from '@reduxjs/toolkit';
import { changeCity, clickOnSortMenu, changeSortingValue, postedComment } from '../action';
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

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(clickOnSortMenu, (state, action) => {
      state.isOpenSortMenu = action.payload;
    })
    .addCase(changeSortingValue, (state, action) => {
      state.activeSortingValue = action.payload;
    })
    .addCase(postedComment, (state, action) => {
      state.postedComment = {
        isPostedComment: action.payload.isPostedComment,
        comment: action.payload.comment,
        rating: action.payload.rating,
        isErrorPostedComment: action.payload.isErrorPostedComment,
      };
    });
});

export { ui };
