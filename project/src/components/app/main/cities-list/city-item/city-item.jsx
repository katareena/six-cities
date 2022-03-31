import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CityItem ({city}) {
  return (
    <li className="locations__item">
      {/* tabs__item--active */}
      <Link className="locations__item-link tabs__item" to="https://ru.reactjs.org">
        <span>{city}</span>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
};

export default CityItem;
