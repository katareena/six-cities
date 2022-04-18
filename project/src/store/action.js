export const ActionType = {
  ADD_OFFERS: 'main/addOffers',
  ADD_USERS: 'signIn/addUsers',
  ADD_COMMENTS: 'room/addComments',
  CHANGE_CITY: 'main/changeCity',
  CLICK_ON_SORT_MENU: 'main/clickOnSortMenu',
  CHANGE_SORTING_VALUE: 'main/changeSortingValue',
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
};
