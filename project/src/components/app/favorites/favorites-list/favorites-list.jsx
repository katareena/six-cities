import React from 'react';
import PropTypes from 'prop-types';

import FavoriteItem from './favorites-item/favorites-item.jsx';

function renderFavoriteItem({previewImage, price, rating, title, type, id}) {
  return (
    <FavoriteItem
      previewImage={previewImage}
      price={price}
      rating={rating}
      title={title}
      type={type}
      key={id}
      id={id}
    />
  );
}

function FavoriteList ({city, datasCity}) {
  const favoriteItems = datasCity.map((data) => renderFavoriteItem(data));
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="https://ru.reactjs.org">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">

        {favoriteItems}

      </div>
    </li>
  );
}

FavoriteList.propTypes = {
  city: PropTypes.string.isRequired,
  datasCity: PropTypes.array.isRequired,
};

export default FavoriteList;
