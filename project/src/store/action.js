export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  ADD_OFFERS: 'main/addOffers',
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
};
