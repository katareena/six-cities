import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  // ----- data -----
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER_ITEM: 'data/loadOfferItem',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  SET_ID_ACTIVE_CARD: 'main/setIdActiveCard',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',

  // ----- ui -----
  CHANGE_CITY: 'main/changeCity',
  CLICK_ON_SORT_MENU: 'main/clickOnSortMenu',
  CHANGE_SORTING_VALUE: 'main/changeSortingValue',
  POSTED_COMMENT: 'data/postedComment',

  // ----- user -----
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  SET_AUTH_USER: 'user/setAuthUser',
  LOGOUT: 'user/logout',
};

// ----- data -----
export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const loadOfferItem = createAction(ActionType.LOAD_OFFER_ITEM, (activeOffer) => ({
  payload: activeOffer,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offersNearby) => ({
  payload: offersNearby,
}));

export const setIdActiveCard = createAction(ActionType.SET_ID_ACTIVE_CARD, (id) => ({
  payload: id,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

// ----- ui -----
export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const clickOnSortMenu = createAction(ActionType.CLICK_ON_SORT_MENU, (isOpenSortMenu) => ({
  payload: isOpenSortMenu,
}));

export const changeSortingValue = createAction(ActionType.CHANGE_SORTING_VALUE, (sortingValue) => ({
  payload: sortingValue,
}));

export const postedComment = createAction(ActionType.POSTED_COMMENT, (isPostedComment) => ({
  payload: isPostedComment,
}));

// ----- user -----
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const setActiveUser = createAction(ActionType.SET_AUTH_USER, (authData) => ({
  payload: authData,
}));

export const signOut = createAction(ActionType.LOGOUT);
