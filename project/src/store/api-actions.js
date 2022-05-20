import { loadOffers, loadOfferItem, loadOffersNearby, loadComments, loadFavoriteOffers, updateOffer, postedComment, requireAuthorization, redirectToRoute, signOut, setActiveUser } from './action.js';
import { AuthorizationStatus, APIRoute, AppRoute, ResponseCodes} from '../constants/common';
import { toCamelCase } from '../utils/to-camel-snake-case';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = toCamelCase(data);
      return offers;
    })
    .then((offers) => dispatch(loadOffers(offers)))
);

export const fetchOfferItem = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.ROOM + offerId)
    .then(({data}) => {
      const offer = toCamelCase(data);
      return offer;
    })
    .then((offer) => dispatch(loadOfferItem(offer)))
    .catch((error) => {
      if ((error.response.status === ResponseCodes.NOT_FOUND || error.response.status === ResponseCodes.BAD_REQUEST)) {
        dispatch(redirectToRoute(AppRoute.NOT_FOUND));
      }
      dispatch(redirectToRoute(AppRoute.NOT_FOUND));
      browserHistory.push(AppRoute.NOT_FOUND);
    })
);

export const fetchNearby = (offerId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => {
      const offersNearby = toCamelCase(data);
      return offersNearby;
    })
    .then((offersNearby) => dispatch(loadOffersNearby(offersNearby)))
);

export const fetchComments = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + offerId)
    .then(({data}) => {
      const comments = toCamelCase(data);
      return comments;
    })
    .then((comments) => dispatch(loadComments(comments)))
);

export const sendComment = ({offerId, comment, rating}) => (dispatch, _getState, api) =>
  api.post(APIRoute.COMMENTS + offerId, {comment, rating})
    .then(({ status, data }) => {
      if (status !== ResponseCodes.SUCCESS) {
        dispatch(postedComment({isPostedComment: false, comment: comment, rating: rating, isErrorPostedComment: true}));
      } else {
        const comments = data.map(toCamelCase);
        dispatch(postedComment({isPostedComment: true, comment: comment, rating: rating, isErrorPostedComment: false}));
        dispatch(loadComments(comments));
      }
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
      dispatch(postedComment({isPostedComment: false, comment: comment, rating: rating, isErrorPostedComment: true}));
    });

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      const user = toCamelCase(data);
      dispatch(setActiveUser(user));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      const user = toCamelCase(data);
      dispatch(setActiveUser(user));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(signOut()))
);

export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FAVORITES)
    .then(({data}) => {
      const favoriteOffers = toCamelCase(data);
      return favoriteOffers;
    })
    .then((favoriteOffers) => dispatch(loadFavoriteOffers(favoriteOffers)))
    .catch(() => dispatch(loadFavoriteOffers([])));
};

export const addOfferToFavorites = ({offerId, status}) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITES}/${offerId}/${status}`)
    .then(({data}) => dispatch(updateOffer(data)))
    .catch(() => {});
};
