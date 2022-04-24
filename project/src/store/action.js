export const ActionType = {
  ADD_OFFERS: 'main/addOffers',
  ADD_USERS: 'signIn/addUsers',
  ADD_COMMENTS: 'room/addComments',
  CHANGE_CITY: 'main/changeCity',
  CLICK_ON_SORT_MENU: 'main/clickOnSortMenu',
  CHANGE_SORTING_VALUE: 'main/changeSortingValue',
  LOAD_OFFERS: 'main/loadOffers',
  LOAD_ROOM_ITEM: 'room/loadRoomItem',
  LOAD_COMMENTS: 'room/loadComments',
  LOAD_NEARBY: 'room/loadNearby',
  REQUIRED_AUTHORIZATION: 'main/requiredAuthorization',
  LOGOUT: 'main/logout',
};

export const ActionCreator =  {
  addOffers: (offers) => ({
    type: ActionType.ADD_OFFERS,
    payload: offers,
  }),

  addUsers: (users) => ({
    type: ActionType.ADD_USERS,
    payload: users,
  }),

  addComments: (comments) => ({
    type: ActionCreator.ADD_COMMENTS,
    payload: comments,
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

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
