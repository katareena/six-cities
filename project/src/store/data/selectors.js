import { createSelector } from 'reselect';
import { NameSpace } from '../root-reducer';
import { getActiveCity, getActiveSortingValue } from '../ui/selectors';
import { sortingOffers } from '../../utils/sorting-offers';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getUsers = (state) => state[NameSpace.DATA].users;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
export const getIsFavoriteOffersLoaded = (state) => state[NameSpace.DATA].isFavoriteOffersLoaded;
export const getActiveOffer = (state) => state[NameSpace.DATA].activeOffer;
export const getIdActiveCard = (state) => state[NameSpace.DATA].idActiveCard;
export const getIsOffersLoaded = (state) => state[NameSpace.DATA].isOffersLoaded;
export const getIsOfferItemLoaded = (state) => state[NameSpace.DATA].isOfferItemLoaded;
export const getIsCommentsLoaded = (state) => state[NameSpace.DATA].isCommentsLoaded;
export const getIsOffersNearbyLoaded = (state) => state[NameSpace.DATA].isOffersNearbyLoaded;

export const getActualOffers = createSelector(
  [getOffers, getActiveCity, getActiveSortingValue],
  (offers, city, sortingValue) => offers.filter((offer) => offer.city.name === city).sort(sortingOffers(sortingValue)),
);

