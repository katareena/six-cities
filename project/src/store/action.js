export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  ADD_OFFERS: 'main/addOffers',
  CHANGE_SORTING_VALUE: 'main/changeSortingValue',
  CLICK_ON_SORT_MENU: 'main/clickOnSortMenu',
};

export const ActionCreator =  {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  addOffers: (offers) => ({
    type: ActionType.ADD_OFFERS,
    payload: offers,
  }),
  changeSortingValue: (sortingValue) => ({
    type: ActionType.CHANGE_SORTING_VALUE,
    payload: sortingValue,
  }),
  clickOnSortMenu: (isOpenSortMenu) => ({
    type: ActionType.CLICK_ON_SORT_MENU,
    payload: isOpenSortMenu,
  }),
};
