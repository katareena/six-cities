import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeCity } from '../../../../../store/action';
import FavoriteSubItem from './favorites-sub-item/favorites-sub-item.jsx';

function renderFavoriteSubItem({previewImage, price, rating, title, type, isFavorite, id}) {
  return (
    <FavoriteSubItem
      previewImage={previewImage}
      price={price}
      rating={rating}
      title={title}
      type={type}
      isFavorite={isFavorite}
      key={id}
      id={id}
    />
  );
}

function FavoriteItem({city, datasCity}) {
  const favoriteSubItem = datasCity.map((data) => renderFavoriteSubItem(data));
  const dispatch = useDispatch();

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to="/"
            onClick={() => dispatch(changeCity(city))}
          >
            <span>{city}</span>
          </Link>
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
