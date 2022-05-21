import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveCity } from '../../../store/ui/selectors';
import { CITIES } from '../../../constants/common';
import Header from '../header/header';
import CitiesList from '../main/cities-list/cities-list';

function MainEmpty() {
  const activeCity = useSelector(getActiveCity);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={CITIES}
          activeCity={activeCity}
        />

        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default MainEmpty;
