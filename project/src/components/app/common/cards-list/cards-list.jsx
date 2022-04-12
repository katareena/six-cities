import React from 'react';
import PropTypes from 'prop-types';

import Card from './card/card';
import hotelsProp from '../../../prop-types/hotels.prop';

import { CardListClasses } from '../../../../constants/common';

function renderCard({isPremium, isFavorite, previewImage, price, rating, title, type, id}, onCardHover) {
  return (
    <Card
      isPremium={isPremium}
      isFavorite={isFavorite}
      previewImage={previewImage}
      price={price}
      rating={rating}
      title={title}
      type={type}
      id={id}
      key={id}

      onMouseOver = {() => onCardHover(id)}
      onMouseLeave = {() => onCardHover('0')}
    />
  );
}

function CardsList({hotels, onCardHover}) {
  const Cards = hotels.map((key) => renderCard(key, onCardHover));
  const currentPathname = window.location.pathname.split('/')[1];

  return (
    <div className={CardListClasses[currentPathname]}>
      {Cards}
    </div>
  );
}

CardsList.propTypes = {
  hotels: hotelsProp.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default CardsList;
