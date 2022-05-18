import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import cn from 'classnames';
import { adoptRating } from '../../../../../utils/adopt-rating';
import { CardItemClasses, AppRoute, AuthorizationStatus } from '../../../../../constants/common';

function renderPremiumMark(isPremium) {
  if (isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  } else {
    return '';
  }
}

function Card({isPremium, isFavorite, previewImage, price, rating, title, type, id, onMouseOver, onMouseLeave, authorizationStatus, idActiveCard}) {
  const currentPathname = window.location.pathname.split('/')[1];
  const history = useHistory();

  const handleClick = () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      history.push(AppRoute.LOGIN);
    }
    // добавить в избранное
  };

  return (
    <article
      className={CardItemClasses[currentPathname]}
      id={id}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {renderPremiumMark(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${idActiveCard}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn('place-card__bookmark-button button',{'place-card__bookmark-button--active':isFavorite})}
            type="button"
            onClick={handleClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: adoptRating(73, rating)}}></span>
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

Card.propTypes = {
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  id: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  idActiveCard: PropTypes.number,
};

const mapStateToProps = ({USER, DATA}) => ({
  authorizationStatus: USER.authorizationStatus,
  idActiveCard: DATA.idActiveCard,
});

export {Card};
export default connect(mapStateToProps, null)(Card);
