import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../../../store/action';
import Card from './card/card';
import offersProp from '../../../prop-types/offers.prop';

import { CardListClasses } from '../../../../constants/common';

function renderCard({id, ...rest}, setIdActiveCard) {
  return (
    <Card
      {...rest}
      id={id}
      key={id}

      onMouseOver = {() => setIdActiveCard(id)}
      onMouseLeave = {() => setIdActiveCard(0)}
    />
  );
}

function CardsList({offers, setIdActiveCard}) {
  const Cards = offers.map((key) => renderCard(key, setIdActiveCard));
  const currentPathname = window.location.pathname.split('/')[1];

  return (
    <div className={CardListClasses[currentPathname]}>
      {Cards}
    </div>
  );
}

CardsList.propTypes = {
  offers: offersProp.isRequired,
  setIdActiveCard: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setIdActiveCard(id) {
    dispatch(ActionCreator.setIdActiveCard(id));
  },
});

export { CardsList };
export default connect(null, mapDispatchToProps)(CardsList);
