import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCity } from '../../../../store/action';
import CityItem from './city-item/city-item';
import citiesProp from '../../../prop-types/cities.prop.js';

function renderCitiesList(city, activeCity, changeCityHandler) {
  return (
    <CityItem
      city={city}
      key={city}
      activeCity={activeCity}
      changeCity={() => changeCityHandler(city)}
    />
  );
}

function CitiesList ({cities, activeCity, changeCityHandler}) {
  const locations = cities.map((city) => city.name);
  const citiesList = locations.map((city) => renderCitiesList(city, activeCity, changeCityHandler));

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
  changeCityHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCityHandler(city) {
    dispatch(changeCity(city));
  },
});

export { CitiesList };
export default connect(null, mapDispatchToProps)(CitiesList);
