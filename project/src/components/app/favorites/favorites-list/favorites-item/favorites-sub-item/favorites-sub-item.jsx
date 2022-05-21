import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoritesButton from '../../../../common/favorite-button/favorite-button';
import { ButtonType } from '../../../../../../constants/common';
import { adoptRating } from '../../../../../../utils/adopt-rating';

function FavoriteSubItem ({previewImage, price, rating, title, type, isFavorite, id}) {
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>

          <FavoritesButton offerId={id} isFavorite={isFavorite} buttonType={ButtonType.OFFERS_LIST_CARD}/>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: adoptRating(73, rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

FavoriteSubItem.propTypes = {
  previewImage: PropTypes.string,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FavoriteSubItem;
