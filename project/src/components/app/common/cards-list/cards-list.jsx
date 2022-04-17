import React from 'react';
import PropTypes from 'prop-types';

import Card from './card/card';
import offersProp from '../../../prop-types/offers.prop';

import { CardListClasses } from '../../../../constants/common';

function renderCard({id, ...rest}, onCardHover) {
  return (
    <Card
      {...rest}
      id={id}
      key={id}

      onMouseOver = {() => onCardHover(id)}
      onMouseLeave = {() => onCardHover('0')}
    />
  );
}

function CardsList({offers, onCardHover}) {
  const Cards = offers.map((key) => renderCard(key, onCardHover));
  const currentPathname = window.location.pathname.split('/')[1];

  return (
    <div className={CardListClasses[currentPathname]}>
      {Cards}
    </div>
  );
}

CardsList.propTypes = {
  offers: offersProp.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default CardsList;
