import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // one of the ways to connect React to the Redux(store)

import Header from '../header/header';
import CitiesList from './cities-list/cities-list';
import CardsList from '../common/cards-list/cards-list';
import Map from '../main/map-main/map-main';
import SortMenu from './sort-menu/sort-menu';

import citiesProp from '../../prop-types/cities.prop';
import offersProp from '../../prop-types/offers.prop';

function sortingOffers(activeSortingValue) {
  // switch (activeSortingValue) {
  //   case 'Price: low to high':
  //     return (prev, next) => prev.price - next.price;
  //   case 'Price: high to low':
  //     return (prev, next) => next.price - prev.price;
  //   case 'Top rated first':
  //     return (prev, next) => next.rating - prev.rating;
  //   default:
  //     return offers;
  // }

  if(activeSortingValue === 'Price: low to high') {
    return (prev, next) => prev.price - next.price;
  }

  if(activeSortingValue === 'Price: high to low') {
    return (prev, next) => next.price - prev.price;
  }

  if(activeSortingValue === 'Top rated first') {
    return (prev, next) => next.rating - prev.rating;
  }
}

function Main({offers, cities, activeCity, activeSortingValue}) {
  const [activeCard, setActiveCard] = useState('0');
  const onCardHover = (id) => setActiveCard(id);
  const actualoffers = offers.filter((offer) => offer.city.name === activeCity).sort(sortingOffers(activeSortingValue));

  // console.log(actualoffers);
  // console.log(offers);
  // console.log(cities);
  // console.log(typeof activeCard, activeCard);
  // console.log(activeCity);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={cities}
          activeCity={activeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            {/* replace with cities__no-places */}
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{actualoffers.length} places to stay in {activeCity}</b>

              <SortMenu />

              <CardsList
                offers={actualoffers}
                onCardHover={onCardHover}
              />
            </section>

            <div className="cities__right-section">
              <Map
                offers={offers}
                cities={cities}
                activeCity={activeCity}
                activeCard={activeCard}
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: offersProp.isRequired,
  cities: citiesProp.isRequired,
  activeCity: PropTypes.string.isRequired,
  activeSortingValue: PropTypes.string.isRequired,
};

const mapStateToProps = ({activeCity, offers, activeSortingValue}) => ({
  activeCity,
  offers,
  activeSortingValue,
});

export { Main }; //keep this option for testing
export default connect(mapStateToProps, null)(Main); //exporting the component that is connected to the store
