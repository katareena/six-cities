export const ActionType = {
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER_ITEM: 'data/loadOfferItem',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  CHANGE_CITY: 'main/changeCity',
  CLICK_ON_SORT_MENU: 'main/clickOnSortMenu',
  CHANGE_SORTING_VALUE: 'main/changeSortingValue',
  SET_ID_ACTIVE_CARD: 'main/setIdActiveCard',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
  SET_AUTH_USER: 'user/setAuthUser',
  POSTED_COMMENT: 'data/postedComment',
};

export const ActionCreator =  {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),

  loadOfferItem: (activeOffer) => ({
    type: ActionType.LOAD_OFFER_ITEM,
    payload: activeOffer,
  }),

  loadOffersNearby: (offersNearby) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offersNearby,
  }),

  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  clickOnSortMenu: (isOpenSortMenu) => ({
    type: ActionType.CLICK_ON_SORT_MENU,
    payload: isOpenSortMenu,
  }),

  changeSortingValue: (sortingValue) => ({
    type: ActionType.CHANGE_SORTING_VALUE,
    payload: sortingValue,
  }),

  setIdActiveCard: (id) => ({
    type: ActionType.SET_ID_ACTIVE_CARD,
    payload: id,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  setActiveUser: (authData) => ({
    type: ActionType.SET_AUTH_USER,
    payload: authData,
  }),

  postedComment: (isPostedComment) => ({
    type: ActionType.POSTED_COMMENT,
    payload: isPostedComment,
  }),
};
