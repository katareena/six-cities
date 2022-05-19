import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOffers } from '../../../store/data/selectors';
import Header from '../header/header';
import FavoriteList from '../favorites/favorites-list/favorites-list';

function createDictionary(newDictionary, currentArrItem) {
  newDictionary[currentArrItem.city.name] = newDictionary[currentArrItem.city.name] || [];
  newDictionary[currentArrItem.city.name].push(currentArrItem);

  return newDictionary;
}

function renderFavoriteLists(data) {
  return Object.keys(data).map((key) => (
    <FavoriteList
      city={key}
      datasCity={data[key]}
      key={key}
    />
  ));
}

function Favorites () {
  const offers = useSelector(getOffers);
  const favoriteoffers = offers.filter(({isFavorite}) => isFavorite);
  const favoriteoffersByCity = favoriteoffers.reduce(createDictionary, Object.create(null));
  const FavoriteLists = renderFavoriteLists(favoriteoffersByCity);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {FavoriteLists}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
