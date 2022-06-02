import React from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteOffers } from '../../../../store/data/selectors';
import FavoriteItem from './favorites-item/favorites-item';

function createDictionary(newDictionary, currentArrItem) {
  newDictionary[currentArrItem.city.name] = newDictionary[currentArrItem.city.name] || [];
  newDictionary[currentArrItem.city.name].push(currentArrItem);

  return newDictionary;
}

function renderFavoriteLists(data) {
  return Object.keys(data).map((key) => (
    <FavoriteItem
      city={key}
      datasCity={data[key]}
      key={key}
    />
  ));
}

function FavoriteList() {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const favoriteoffersByCity = favoriteOffers.reduce(createDictionary, Object.create(null));
  const FavoriteLists = renderFavoriteLists(favoriteoffersByCity);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {FavoriteLists}
      </ul>
    </section>
  );
}

export default FavoriteList;
