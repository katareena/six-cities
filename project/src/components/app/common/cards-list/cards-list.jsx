import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIdActiveCard } from '../../../../store/action';

import Card from './card/card';
import offersProp from '../../../prop-types/offers.prop';
import { CardListClasses } from '../../../../constants/common';

function renderCard({id, ...rest}, dispatch) {
  return (
    <Card
      {...rest}
      id={id}
      key={id}

      onMouseOver = {() => dispatch(setIdActiveCard(id))}
      onMouseLeave = {() => dispatch(setIdActiveCard(0))}
    />
  );
}

function CardsList({offers}) {
  const dispatch = useDispatch();
  const Cards = offers.map((key) => renderCard(key, dispatch));
  const currentPathname = window.location.pathname.split('/')[1];

  return (
    <div className={CardListClasses[currentPathname]}>
      {Cards}
    </div>
  );
}

CardsList.propTypes = {
  offers: offersProp.isRequired,
};

export default CardsList;
