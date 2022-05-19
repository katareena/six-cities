import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, loadComments, loadOfferItem, loadOffersNearby, setIdActiveCard, redirectToRoute } from '../action';

const initialState = {
  offers: [],
  comments: [],
  activeOffer: null,
  offersNearby: [],
  idActiveCard: 0,
  isOffersLoaded: false,
  isOfferItemLoaded: false,
  isCommentsLoaded: false,
  isOffersNearbyLoaded: false,
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
    .addCase(setIdActiveCard, (state, action) => {
      state.idActiveCard = action.payload;
    })
    .addCase(redirectToRoute, (state, action) => {
      state.url = action.payload;
    });

});

export { data };
