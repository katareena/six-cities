import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
  PropTypes.shape({
    comment: PropTypes.string.isRequired,
    // date: dayjs().subtract((getRandomInt(1, 5)), 'month').format('MM/YYYY'),
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string,
      token: PropTypes.string,
    }),
  }),
);
