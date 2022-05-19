import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeCity } from '../../../../store/action';
import CityItem from './city-item/city-item';
import citiesProp from '../../../prop-types/cities.prop.js';

function renderCitiesList(city, activeCity, dispatch) {
  return (
    <CityItem
      city={city}
      key={city}
      activeCity={activeCity}
      changeCity={() => dispatch(changeCity(city))}
    />
  );
}

function CitiesList ({cities, activeCity}) {
  const dispatch = useDispatch();
  const locations = cities.map((city) => city.name);
  const citiesList = locations.map((city) => renderCitiesList(city, activeCity, dispatch));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList}
        </ul>
      </section>
    </div>
  );
}

CitiesList.propTypes = {
  cities: citiesProp.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default CitiesList;
