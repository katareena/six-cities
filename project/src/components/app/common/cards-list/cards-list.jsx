import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setIdActiveCard } from '../../../../store/action';
import Card from './card/card';
import offersProp from '../../../prop-types/offers.prop';

import { CardListClasses } from '../../../../constants/common';

function renderCard({id, ...rest}, setIdActiveCardHandler) {
  return (
    <Card
      {...rest}
      id={id}
      key={id}

      onMouseOver = {() => setIdActiveCardHandler(id)}
      onMouseLeave = {() => setIdActiveCardHandler(0)}
    />
  );
}

function CardsList({offers, setIdActiveCardHandler}) {
  const Cards = offers.map((key) => renderCard(key, setIdActiveCardHandler));
  const currentPathname = window.location.pathname.split('/')[1];

  return (
    <div className={CardListClasses[currentPathname]}>
      {Cards}
    </div>
  );
}

CardsList.propTypes = {
  offers: offersProp.isRequired,
  setIdActiveCardHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setIdActiveCardHandler(id) {
    dispatch(setIdActiveCard(id));
  },
});

export { CardsList };
export default connect(null, mapDispatchToProps)(CardsList);
