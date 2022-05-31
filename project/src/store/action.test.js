import {
  ActionType,
  loadOffers,
  loadComments,
  loadOfferItem,
  loadOffersNearby,
  loadFavoriteOffers,
  updateOffer,
  setIdActiveCard,
  redirectToRoute,
  changeCity,
  clickOnSortMenu,
  changeSortingValue,
  postedComment,
  requireAuthorization,
  setActiveUser,
  signOut
} from './action';

const offers = [
  {
    'bedrooms': 0,
    'city': '',
    'description': '',
    'goods': '',
    'host': {
      'avatar_url': '',
      'id': 0,
      'is_pro': true,
      'name': '',
    },
    'id': '',
    'images': '',
    'is_favorite': true,
    'is_premium': true,
    'location': '',
    'max_adults': 1,
    'preview_image': '',
    'price': 0,
    'rating': 0,
    'title': '',
    'type': '',
  },
];

const comments = [
  {
    'comment': '',
    'date': '',
    'id': 0,
    'rating': 0,
    'user': {
      'avatar_url': '',
      'email': '',
      'id': 0,
      'is_pro': true,
      'name': '',
      'token': '',
    },
  },
];

describe('Actions', () => {
  it('action creator for loading all offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for loading all comments returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it('action creator for loading offer item returns correct action', () => {
    const activeOffer = offers[0];
    const expectedAction = {
      type: ActionType.LOAD_OFFER_ITEM,
      payload: activeOffer,
    };

    expect(loadOfferItem(offers[0])).toEqual(expectedAction);
  });

  it('action creator for loading offers nearby returns correct action', () => {
    const offersNearby = offers;
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offersNearby,
    };

    expect(loadOffersNearby(offersNearby)).toEqual(expectedAction);
  });

  it('action creator for loading favorite offers returns correct action', () => {
    const favoriteOffers = offers;
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffers,
    };

    expect(loadFavoriteOffers(favoriteOffers)).toEqual(expectedAction);
  });

  it('action creator for update offer returns correct action', () => {
    const offer = offers[0];
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: offer,
    };

    expect(updateOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for setting id active card returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_ID_ACTIVE_CARD,
      payload: 5,
    };

    expect(setIdActiveCard(5)).toEqual(expectedAction);
  });

  it('action creator for redirect returns correct action', () => {
    const url = '/login';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator for change city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    };

    expect(changeCity('Paris')).toEqual(expectedAction);
  });

  it('action creator for click on sort menu returns correct action', () => {
    const isOpenSortMenu = false;
    const expectedAction = {
      type: ActionType.CLICK_ON_SORT_MENU,
      payload: isOpenSortMenu,
    };

    expect(clickOnSortMenu(isOpenSortMenu)).toEqual(expectedAction);
  });

  it('action creator for change sorting value returns correct action', () => {
    const sortingValue = 'Top rated first';
    const expectedAction = {
      type: ActionType.CHANGE_SORTING_VALUE,
      payload: sortingValue,
    };

    expect(changeSortingValue(sortingValue)).toEqual(expectedAction);
  });

  it('action creator for posted comment returns correct action', () => {
    const isPostedComment = true;
    const expectedAction = {
      type: ActionType.POSTED_COMMENT,
      payload: isPostedComment,
    };

    expect(postedComment(isPostedComment)).toEqual(expectedAction);
  });

  it('action creator for require authorization status returns correct action', () => {
    const status = 'AUTH';
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('action creator for seting active user returns correct action', () => {
    const authData = {
      username: '',
      email: '',
      id: 1,
      avatarUrl: '',
    };

    const expectedAction = {
      type: ActionType.SET_AUTH_USER,
      payload: authData,
    };

    expect(setActiveUser(authData)).toEqual(expectedAction);
  });

  it('action creator for signing out returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(signOut()).toEqual(expectedAction);
  });
});
