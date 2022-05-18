import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { fetchOfferItem, fetchNearby, fetchComments } from '../../../store/api-actions';

import Header from '../header/header';
import ReviewList from './review-list/review-list';
import MapOffer from './map-offer/map-offer';
import CardsList from '../common/cards-list/cards-list';
import LoadingScrin from '../loading-screen/loading-screen';
import offersProp from '../../prop-types/offers.prop';
import { adoptRating } from '../../../utils/adopt-rating';

function renderImage(img) {
  return (
    <div className="property__image-wrapper" key={img}>
      <img className="property__image" src={img} alt="Studio" />
    </div>
  );
}

function renderPremiumMark(isPremium) {
  if (isPremium) {
    return (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    );
  } else {
    return '';
  }
}

function renderGoodsItem(good) {
  return (
    <li className="property__inside-item" key={good}>
      {good}
    </li>
  );
}

function Offer ({activeOffer, offersNearby, onLoad, isOfferItemLoaded}) {
  const {id} = useParams();

  useEffect(() => {
    onLoad(id);
  }, [id, onLoad]);

  if (!isOfferItemLoaded) {
    return (
      <LoadingScrin />
    );
  }

  const {bedrooms, description, goods, images, isPremium, isFavorite, maxAdults, price, rating, title, type, host: {avatarUrl, isPro, name}, city} = activeOffer;
  const createGallery = images.slice(0, 6).map((img) => renderImage(img));
  const createGoods = goods.map((good) => renderGoodsItem(good));

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {createGallery}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {renderPremiumMark(isPremium)}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={cn('property__bookmark-button button',{'property__bookmark-button--active':isFavorite})} type="button"
                >
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: adoptRating(147, rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What is inside</h2>
                <ul className="property__inside-list">
                  {createGoods}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  <span className="property__user-status">
                    {isPro && 'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewList offerId={id} />
            </div>
          </div>
          <MapOffer
            activeOffer={activeOffer}
            currentCity={city}
            offersNearby={offersNearby}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList
              offers={offersNearby}
              onCardHover={() => {}}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  offersNearby: offersProp,
  onLoad: PropTypes.func.isRequired,
  isOfferItemLoaded: PropTypes.bool.isRequired,

  activeOffer: PropTypes.shape({
    bedrooms: PropTypes.number,
    city: PropTypes.shape({
      location: PropTypes.objectOf(PropTypes.number),
      name: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    goods: PropTypes.array,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),

    id: PropTypes.number.isRequired,
    images: PropTypes.array,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,

    maxAdults: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = ({DATA}) => ({
  activeCity: DATA.activeCity,
  activeOffer: DATA.activeOffer,
  offersNearby: DATA.offersNearby,
  isOfferItemLoaded: DATA.isOfferItemLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchOfferItem(id));
    dispatch(fetchNearby(id));
    dispatch(fetchComments(id));
  },
});

export { Offer };
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
