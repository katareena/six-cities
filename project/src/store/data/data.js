import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, loadComments, loadOfferItem, loadOffersNearby, loadFavoriteOffers, updateOffer, setIdActiveCard, redirectToRoute } from '../action';

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

export const removeFromFavoriteOffers = (offers, offerToRemove) => {
  const {id} = offerToRemove;
  const index = offers.findIndex((item) => item.id === id);
  if (index !== -1) {
    offers.splice(index, 1);
  }
  return offers;
};

export const updateOffers = (offers, updatedOffer) => {
  const { id } = updatedOffer;
  const index = offers.findIndex((item) => item.id === id);
  if (index !== -1) {
    offers[index].isFavorite = updatedOffer.isFavorite;
  }
  return offers;
};

export const updateActiveOffer = (activeOffer, updatedOffer) => {
  if (activeOffer && activeOffer.id === updatedOffer.id) {
    activeOffer.isFavorite = updatedOffer.isFavorite;
  }
  return activeOffer;
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
      state.offers = updateOffers(state.offers, action.payload);
      state.offersNearby = updateOffers(state.offersNearby, action.payload);
      state.activeOffer = updateActiveOffer(state.activeOffer, action.payload);
      state.favoriteOffers = removeFromFavoriteOffers(state.favoriteOffers, action.payload);
    })
    .addCase(setIdActiveCard, (state, action) => {
      state.idActiveCard = action.payload;
    })
    .addCase(redirectToRoute, (state, action) => {
      state.url = action.payload;
    });

});

export { data };
