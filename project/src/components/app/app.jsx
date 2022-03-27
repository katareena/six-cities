import React from 'react';
import PropTypes from 'prop-types';
import Main from './main/main.jsx';

function App({hotels}) {
  return (
    <Main hotels={hotels} />
  );
}

App.propTypes = {
  hotels: PropTypes.arrayOf( //массив из определённых элементов, позволяет уточнить содержимое массива
    PropTypes.shape({ //позволяет описать структуру ожидаемого объекта
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      previewImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
