import React, { useState } from 'react';

import Header from '../header/header.jsx';
import CitiesList from './cities-list/cities-list.jsx';
import CardsList from './cards-list/cards-list.jsx';

import citiesProp from '../../prop-types/cities.prop.js';
import hotelsProp from '../../prop-types/hotels.prop';

function Main({hotels, cities}) {
  const [activeCard, setActiveCard] = useState(0);
  const onCardHover = (id) => setActiveCard(id);
  // console.log(hotels);
  // console.log(cities);
  // console.log(activeCard);

  return (
    <div className="page page--gray page--main">
      <Header />
      {/* add page__main--index-empty */}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={cities}
        />
        <div className="cities">
          <div className="cities__places-container container">
            {/* replace with cities__no-places */}
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>

              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by &thinsp;</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {/* places__options--opened */}
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>

              <CardsList
                hotels={hotels}
                onCardHover={onCardHover}
              />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  hotels: hotelsProp.isRequired,
  cities: citiesProp.isRequired,
};

export default Main;
