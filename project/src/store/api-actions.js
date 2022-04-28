import { ActionCreator } from './action.js';
import { AuthorizationStatus, APIRoute, AppRoute, ResponseCodes} from '../constants/common';
import { toCamelCase } from '../utils/to-camel-snake-case';
import {createBrowserHistory} from 'history';

const browserHistory = createBrowserHistory();

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = toCamelCase(data);
      return offers;
    })
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export const fetchOfferItem = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.ROOM + offerId)
    .then(({data}) => {
      const offer = toCamelCase(data);
      return offer;
    })
    .then((offer) => dispatch(ActionCreator.loadOfferItem(offer)))
    .catch((error) => {
      if ((error.response.status === ResponseCodes.NOT_FOUND || error.response.status === ResponseCodes.BAD_REQUEST)) {
        dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND));
      }
      dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND));
      browserHistory.push(AppRoute.NOT_FOUND);
    })
);

export const fetchNearby = (offerId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => {
      const offersNearby = toCamelCase(data);
      return offersNearby;
    })
    .then((offersNearby) => dispatch(ActionCreator.loadOffersNearby(offersNearby)))
);

export const fetchComments = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + offerId) // return promise
    .then(({data}) => {
      const comments = toCamelCase(data);
      return comments;
    })
    .then((comments) => dispatch(ActionCreator.loadComments(comments)))
);

export const sendComment = ({offerId, comment, rating}) => (dispatch, _getState, api) => {
  api.post(APIRoute.COMMENTS + offerId, {comment, rating})
    .then(({ status, data }) => {
      if (status !== ResponseCodes.SUCCESS) {
        dispatch(ActionCreator.postedComment({isPostedComment: false, comment: comment, rating: rating}));
      } else {
        const comments = data.map(toCamelCase);
        dispatch(ActionCreator.postedComment({isPostedComment: true, comment: comment, rating: rating}));
        dispatch(ActionCreator.loadComments(comments));
      }
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
