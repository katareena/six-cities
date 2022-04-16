import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CityItem ({city, activeCity, changeCity}) {
  return (
    <li className="locations__item" onClick={changeCity}>
      <Link className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`} to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default CityItem;
