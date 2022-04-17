import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
  PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.objectOf(PropTypes.number),
      name: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    goods: PropTypes.array,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string,
      id: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),

    id: PropTypes.string.isRequired,
    images: PropTypes.array,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,

    // 'location': {
    //   'latitude': 52.35514938496378,
    //   'longitude': 4.673877537499948,
    //   'zoom': 8,
    // },

    maxAdults: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
);
