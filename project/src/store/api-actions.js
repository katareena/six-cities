import { ActionCreator } from './action.js';
import { AuthorizationStatus, APIRoute} from '../constants/common';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchRoomItem = (roomId) => (dispatch, _getState, api) => (
  api.get(APIRoute.ROOM + roomId)
    .then(({data}) => dispatch(ActionCreator.loadRoomItem(data)))
);

export const fetchComments = (roomId) => (dispatch, _getState, api) => (
  api.get(`/comments/${roomId}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const fetchNearby = (roomId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${roomId}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearby(data)))
);

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
    // .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
