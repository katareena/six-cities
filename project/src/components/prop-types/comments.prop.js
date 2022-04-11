import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
  PropTypes.shape({
    comment: PropTypes.string.isRequired,
    // date: dayjs().subtract((getRandomInt(1, 5)), 'month').format('MM/YYYY'),
    id: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      token: PropTypes.string.isRequired,
    }),
  }),
);
