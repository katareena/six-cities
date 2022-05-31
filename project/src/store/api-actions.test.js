import MockAdapter from 'axios-mock-adapter'; //replaces all requests that are sent to the real server
import { createAPI } from '../services/api';
import { ActionType } from './action';
import { fetchOffersList,
  fetchOfferItem,
  fetchNearby,
  fetchComments,
  sendComment,
  checkAuth,
  login,
  fetchFavoriteOffersList,
  addOfferToFavorites } from './api-actions';
import { APIRoute, AppRoute, AuthorizationStatus } from '../constants/common';
import { toCamelCase } from '../utils/to-camel-snake-case';

let api = null;

const fakeOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 3,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const fakeUser = [{
  'avatarUrl': 'test avatar',
  email: 'test@test.com',
  id: 1,
  'isPro': false,
  name: 'Test',
  token: 'gg125h25gf9h9h9g988',
}];

const fakeComment = {
  comment: 'Very comfortable and cheap!!!!',
  date: '2021-07-15T14:13:56.569Z',
  id: 1,
  rating: 5,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

describe('Asynnc operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispath = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [fakeOffer]);

    return offersLoader(dispath, () => {}, api)
      .then(() => {
        expect(dispath).toHaveBeenCalledTimes(1);
        expect(dispath).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [toCamelCase(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispath = jest.fn();
    const offerId = 5;
    const offerItemLoader = fetchOfferItem(offerId);

    apiMock
      .onGet(`${APIRoute.ROOM}${offerId}`)
      .reply(200, [fakeOffer]);

    return offerItemLoader(dispath, () => {}, api)
      .then(() => {
        expect(dispath).toHaveBeenCalledTimes(1);
        expect(dispath).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_ITEM,
          payload: [toCamelCase(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispath = jest.fn();
    const offerId = 5;
    const offersNearbyLoader = fetchNearby(offerId);

    apiMock
      .onGet(`${APIRoute.ROOM}${offerId}/nearby`)
      .reply(200, [fakeOffer]);

    return offersNearbyLoader(dispath, () => {}, api)
      .then(() => {
        expect(dispath).toHaveBeenCalledTimes(1);
        expect(dispath).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: [toCamelCase(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispath = jest.fn();
    const offerId = 5;
    const commentsLoader = fetchComments(offerId);

    apiMock
      .onGet(`${APIRoute.COMMENTS}${offerId}`)
      .reply(200, [fakeComment]);

    return commentsLoader(dispath, () => {}, api)
      .then(() => {
        expect(dispath).toHaveBeenCalledTimes(1);
        expect(dispath).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [toCamelCase(fakeComment)],
        });
      });
  });

  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispath = jest.fn();
    const offerId = 10;
    const comment = 'Very comfortable!';
    const rating = 5;
    const commentsSender = sendComment({offerId, comment, rating});

    apiMock
      .onPost(`${APIRoute.COMMENTS}${offerId}`, {comment, rating})
      .reply(200, [fakeComment]);

    return commentsSender(dispath, () => {}, api)
      .then(() => {
        expect(dispath).toHaveBeenCalledTimes(2);
        expect(dispath).toHaveBeenNthCalledWith(1, {
          type: ActionType.POSTED_COMMENT,
          payload: {isPostedComment: true, comment: comment, rating: rating, isErrorPostedComment: false},
        });
        expect(dispath).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS,
          payload: [toCamelCase(fakeComment)],
        });
      });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispath = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, fakeUser);

    return checkAuthLoader(dispath, () => {}, api)
      .then(() => {
        expect(dispath).toHaveBeenCalledTimes(2);
        expect(dispath).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_USER,
          payload: toCamelCase(fakeUser),
        });
        expect(dispath).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispath = jest.fn();
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, fakeUser);

    return loginLoader(dispath, () => {}, api)
      .then(() => {
        expect(dispath).toHaveBeenCalledTimes(3);
        expect(dispath).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_USER,
          payload: toCamelCase(fakeUser),
        });
        expect(dispath).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispath).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });

      });
  });

  it('should make a correct API call to POST /favorite/:id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispath = jest.fn();
    const offerId = 10;
    const status = 0;
    const favoriteOffersSender = addOfferToFavorites({offerId, status});

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${offerId}/${status}`)
      .reply(200, fakeOffer);

    return favoriteOffersSender(dispath, () => {}, api)
      .then(() => {
        expect(dispath).toHaveBeenCalledTimes(1);
        expect(dispath).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: toCamelCase(fakeOffer),
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispath = jest.fn();
    const favoriteOffersLoader = fetchFavoriteOffersList();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [fakeOffer]);

    return favoriteOffersLoader(dispath, () => {}, api)
      .then(() => {
        expect(dispath).toHaveBeenCalledTimes(1);
        expect(dispath).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [toCamelCase(fakeOffer)],
        });
      });
  });

});
