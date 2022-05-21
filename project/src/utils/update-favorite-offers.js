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
