import React, { useState } from 'react';

import Header from '../header/header.jsx';
import CitiesList from './cities-list/cities-list.jsx';
import CardsList from './cards-list/cards-list.jsx';
import Map from '../main/map/map';
import SortMenu from './sort-menu/sort-menu.jsx';

import citiesProp from '../../prop-types/cities.prop.js';
import hotelsProp from '../../prop-types/hotels.prop';

function Main({hotels, cities}) {
  const [activeCard, setActiveCard] = useState('0');
  const [activeCity, setActiveCity] = useState(cities[3].name);
  const [openSort, setOpenSort] = useState(false);
  const onCardHover = (id) => setActiveCard(id);
  const onCityClick = (name) => setActiveCity(name);
  const onSortClick = () => setOpenSort(!openSort);
  const actualHotels = hotels.filter((hotel) => hotel.city.name === activeCity);
  // console.log(actualHotels);
  // console.log(hotels);
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
          onCityClick={onCityClick}
          activeCity={activeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            {/* replace with cities__no-places */}
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in {activeCity}</b>

              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by &thinsp;</span>
                <span className="places__sorting-type" tabIndex="0" onClick={onSortClick}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortMenu openSort={openSort}/>
              </form>

              <CardsList
                hotels={actualHotels}
                onCardHover={onCardHover}
              />
            </section>

            <div className="cities__right-section">
              <Map
                hotels={hotels}
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
  hotels: hotelsProp.isRequired,
  cities: citiesProp.isRequired,
};

export default Main;
