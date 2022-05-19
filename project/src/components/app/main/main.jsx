import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveCity } from '../../../store/ui/selectors';
import { getActualOffers, getIdActiveCard } from '../../../store/data/selectors';
import { CITIES } from '../../../constants/common';
import Header from '../header/header';
import CitiesList from './cities-list/cities-list';
import CardsList from '../common/cards-list/cards-list';
import Map from '../main/map-main/map-main';
import SortMenu from './sort-menu/sort-menu';

function Main() {
  const offers = useSelector(getActualOffers);
  const activeCity = useSelector(getActiveCity);
  const idActiveCard = useSelector(getIdActiveCard);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={CITIES}
          activeCity={activeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            {/* replace with cities__no-places */}
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>

              <SortMenu />

              <CardsList
                offers={offers}
              />
            </section>

            <div className="cities__right-section">
              <Map
                offers={offers}
                cities={CITIES}
                activeCity={activeCity}
                activeCard={idActiveCard}
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
