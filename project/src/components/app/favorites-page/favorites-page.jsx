import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavoriteOffersList } from '../../../store/api-actions';
import { getFavoriteOffers, getIsFavoriteOffersLoaded } from '../../../store/data/selectors';
import Header from '../header/header';
import FavoriteList from './favorites-list/favorites-list';
import FavoriteListEmpty from './favorites-list-empty/favorites-list-empty';

function renderFavorites(isFavoriteOffersLoaded, favoriteOffers) {
  if (isFavoriteOffersLoaded) {
    if (favoriteOffers.length === 0) {
      return <FavoriteListEmpty />;
    }

    return <FavoriteList />;
  }

  return (
    <section className="favorites favorites--empty">
      <div className="favorites__status-wrapper">
        <h1>Loading...</h1>
      </div>
    </section>
  );
}

function FavoritesPage() {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const isFavoriteOffersLoaded = useSelector(getIsFavoriteOffersLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersList());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">

          {renderFavorites(isFavoriteOffersLoaded, favoriteOffers)}

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

export default FavoritesPage;
