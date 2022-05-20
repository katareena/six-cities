import React from 'react';
import PropTypes from 'prop-types';

import FavoriteSubItem from './favorites-sub-item/favorites-sub-item.jsx';

function renderFavoriteSubItem({previewImage, price, rating, title, type, id}) {
  return (
    <FavoriteSubItem
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

function FavoriteItem ({city, datasCity}) {
  const favoriteSubItem = datasCity.map((data) => renderFavoriteSubItem(data));
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

        {favoriteSubItem}

      </div>
    </li>
  );
}

FavoriteItem.propTypes = {
  city: PropTypes.string.isRequired,
  datasCity: PropTypes.array.isRequired,
};

export default FavoriteItem;
