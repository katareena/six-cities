import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, loadComments, loadOfferItem, loadOffersNearby, loadFavoriteOffers, updateOffer, setIdActiveCard, redirectToRoute } from '../action';
import { toCamelCase } from '../../utils/to-camel-snake-case';
import { removeFromFavoriteOffers, updateOffers, updateActiveOffer } from '../../utils/update-favorite-offers';

const initialState = {
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

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
      state.isCommentsLoaded = true;
    })
    .addCase(loadOfferItem, (state, action) => {
      state.activeOffer = action.payload;
      state.isOfferItemLoaded = true;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
      state.isOffersNearbyLoaded = true;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersLoaded = true;
    })
    .addCase(updateOffer, (state, action) => {
      const actionPayload = toCamelCase(action.payload);
      state.offers = updateOffers(state.offers, actionPayload);
      state.offersNearby = updateOffers(state.offersNearby, actionPayload);
      state.activeOffer = updateActiveOffer(state.activeOffer, actionPayload);
      state.favoriteOffers = removeFromFavoriteOffers(state.favoriteOffers, actionPayload);

    })
    .addCase(setIdActiveCard, (state, action) => {
      state.idActiveCard = action.payload;
    })
    .addCase(redirectToRoute, (state, action) => {
      state.url = action.payload;
    });
});

export { data };
