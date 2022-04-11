import React from 'react';
import PropTypes from 'prop-types';
import CityItem from './city-item/city-item';
import citiesProp from '../../../prop-types/cities.prop.js';

function renderCitiesList(city, activeCity, onCityClick) {
  return (
    <CityItem
      city={city}
      key={city}
      activeCity={activeCity}
      onCityClick={() => onCityClick(city)}
    />
  );
}

function CitiesList ({cities, activeCity, onCityClick}) {
  const locations = cities.map((city) => city.name);
  const citiesList = locations.map((city) => renderCitiesList(city, activeCity, onCityClick));

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
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
