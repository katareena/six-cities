import React from 'react';
import PropTypes from 'prop-types';
import CityItem from './city-item/city-item';

function renderCitiesList(city) {
  return (
    <CityItem
      city={city}
      key={city}
    />
  );
}

function CitiesList ({cities}) {
  const locations = cities.map((city) => city.name);
  const citiesList = locations.map((city) => renderCitiesList(city));

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
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CitiesList;
