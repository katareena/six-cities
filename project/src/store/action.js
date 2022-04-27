export const ActionType = {
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_ROOM_ITEM: 'data/loadRoomItem',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_NEARBY: 'data/loadNearby',
  CHANGE_CITY: 'main/changeCity',
  CLICK_ON_SORT_MENU: 'main/clickOnSortMenu',
  CHANGE_SORTING_VALUE: 'main/changeSortingValue',
  SET_ID_ACTIVE_CARD: 'main/setIdActiveCard',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
  SET_AUTH_USER: 'user/setAuthUser',
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

  loadRoomItem: (room) => ({
    type: ActionType.LOAD_ROOM_ITEM,
    payload: room,
  }),

  loadNearby: (nearby) => ({
    type: ActionType.LOAD_NEARBY,
    payload: nearby,
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
};
