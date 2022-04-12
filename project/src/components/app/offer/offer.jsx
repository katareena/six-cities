import React from 'react';
import cn from 'classnames';

import Header from '../header/header';
import ReviewList from './review-list/review-list';
import MapOffer from './map-offer/map-offer';
import CardsList from '../common/cards-list/cards-list';

import hotelsProp from '../../prop-types/hotels.prop';
import commentsProp from '../../prop-types/comments.prop';

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

function adoptRatingHundred(rating) {
  const starsWidth = 147;
  const starsNumber = 5;
  return ((starsWidth/starsNumber)*rating);
}

function Offer ({hotels, comments}) {
  const {bedrooms, description, goods, images, isPremium, isFavorite, maxAdults, price, rating, title, type, host: {avatarUrl, isPro, name}, city, id} = hotels[0];

  const createGallery = images.map((img) => renderImage(img));
  const createGoods = goods.map((good) => renderGoodsItem(good));

  const hotelsNearby = hotels.filter((hotelItem) => hotelItem.id !== id).filter((hotelItem) => hotelItem.city.name === city.name);

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
                  <span style={{width: adoptRatingHundred(rating)}} />
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
                    {isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewList comments={comments}/>
            </div>
          </div>

          <MapOffer
            hotels={hotels}
            currentCity={city}
            hotelsNearby={hotelsNearby}
          />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList
              hotels={hotelsNearby}
              onCardHover={()=> {}}
            />
          </section>
        </div>
      </main>
    </div>

  );
}

Offer.propTypes = {
  hotels: hotelsProp.isRequired,
  comments: commentsProp.isRequired,
};

export default Offer;
