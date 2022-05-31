import { data } from './data';
import { ActionType } from '../action';

const state = {
  offers: [],
  isOffersLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  activeOffer: null, //obj
  isOfferItemLoaded: false,
  offersNearby: [],
  isOffersNearbyLoaded: false,
  favoriteOffers: [],
  isFavoriteOffersLoaded: false,
  idActiveCard: 0,
  url: '',
};

const offers = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatar_url': 'img/avatar-angelina.jpg',
      'id': 3,
      'is_pro': true,
      'name': 'Angelina',
    },
    'id': 1,
    'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    'isFavorite': true,
    'is_premium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    'max_adults': 4,
    'preview_image': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'bedrooms': 2,
    'city': {
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatar_url': 'img/avatar-angelina.jpg',
      'id': 3,
      'is_pro': true,
      'name': 'Angelina',
    },
    'id': 2,
    'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    'isFavorite': true,
    'is_premium': true,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    'max_adults': 4,
    'preview_image': 'img/apartment-01.jpg',
    'price': 180,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
];

const offerToUpdate = {
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.38333,
      'longitude': 4.9,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  'host': {
    'avatar_url': 'img/avatar-angelina.jpg',
    'id': 3,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': 1,
  'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  'isFavorite': true,
  'is_premium': false,
  'location': {
    'latitude': 52.3909553943508,
    'longitude': 4.85309666406198,
    'zoom': 8,
  },
  'max_adults': 4,
  'preview_image': 'img/apartment-01.jpg',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
};

const comments = [
  {
    'comment': 'Fugiat et cupidatat irure occaecat ex.',
    'date': '2020-08-08T22:13:00.569Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatar_url': 'img/avatar-angelina.jpg',
      'id': 4,
      'is_pro': false,
      'name': 'Angelina',
    },
  },
];

describe('Reducer: data', () => {
  it('without additional parametrs should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual({...state});
  });

  it('should update offers by load offers', () => {
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(data(state, loadOffersAction))
      .toEqual({...state, offers: offers, isOffersLoaded: true});
  });

  it('should update comments by load offers', () => {
    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(data(state, loadCommentsAction))
      .toEqual({...state, comments: comments, isCommentsLoaded: true});
  });

  it('should update current offer with a given id', () => {
    const activeOffer = offers[0];
    const loadOfferItemAction = {
      type: ActionType.LOAD_OFFER_ITEM,
      payload: activeOffer,
    };

    expect(data(state, loadOfferItemAction))
      .toEqual({...state, activeOffer: activeOffer, isOfferItemLoaded: true});
  });

  it('should update nearby offers by load nearby offers', () => {
    const offersNearby = offers;

    const loadOffersNearbyAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offersNearby,
    };

    expect(data(state, loadOffersNearbyAction))
      .toEqual({...state, offersNearby: offersNearby, isOffersNearbyLoaded: true});
  });

  it('should update favorite offers by load favorite offers', () => {
    const favoriteOffers = offers;

    const loadFavoriteOffersAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffers,
    };

    expect(data(state, loadFavoriteOffersAction))
      .toEqual({...state,
        favoriteOffers: favoriteOffers,
        isFavoriteOffersLoaded: true});
  });

  it('should update offers with the given favorite offer', () => {
    const currentState = {
      offers: offers,
      isOffersLoaded: true,
      comments: comments,
      isCommentsLoaded: true,
      activeOffer: offerToUpdate,
      isOfferItemLoaded: false,
      offersNearby: offers,
      isOffersNearbyLoaded: true,
      favoriteOffers: offers,
      isFavoriteOffersLoaded: true,
      idActiveCard: 0,
      url: '',
    };

    const updatedOffers = offers;
    const updatedOffersNearby = offers;
    const updatedFavoriteOffers = offers.slice(1, 2);

    const updateOfferAction = {
      type: ActionType.UPDATE_OFFER,
      payload: offerToUpdate,
    };

    expect(data(currentState, updateOfferAction))
      .toEqual({...currentState,
        offers: updatedOffers,
        activeOffer: offerToUpdate,
        offersNearby: updatedOffersNearby,
        favoriteOffers: updatedFavoriteOffers,
      });
  });

  it('should set id active card', () => {
    const id = 5;

    const setIdActiveCardAction = {
      type: ActionType.SET_ID_ACTIVE_CARD,
      payload: id,
    };

    expect(data(state, setIdActiveCardAction))
      .toEqual({...state, idActiveCard: id});
  });

  it('should redirect to route', () => {
    const url = '/login';

    const redirectToRouteAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(data(state, redirectToRouteAction))
      .toEqual({...state, url: url});
  });
});
