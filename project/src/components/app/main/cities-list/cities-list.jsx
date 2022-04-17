import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../../../store/action';
import CityItem from './city-item/city-item';
import citiesProp from '../../../prop-types/cities.prop.js';

function renderCitiesList(city, activeCity, changeCity) {
  return (
    <CityItem
      city={city}
      key={city}
      activeCity={activeCity}
      changeCity={() => changeCity(city)}
    />
  );
}

function CitiesList ({cities, activeCity, changeCity}) {
  const locations = cities.map((city) => city.name);
  const citiesList = locations.map((city) => renderCitiesList(city, activeCity, changeCity));

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
  changeCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export { CitiesList };
export default connect(null, mapDispatchToProps)(CitiesList);
