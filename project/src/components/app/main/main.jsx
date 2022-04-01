import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card.jsx';
import Header from '../header/header.jsx';
import CitiesList from './cities-list/cities-list.jsx';

function renderCard({isPremium, isFavorite, previewImage, price, rating, title, type, id}) {
  return (
    <Card
      isPremium={isPremium}
      isFavorite={isFavorite}
      previewImage={previewImage}
      price={price}
      rating={rating}
      title={title}
      type={type}
      id={id}
      key={id}
    />
  );
}

function Main({hotels, cities}) {
  // console.log(hotels);
  // console.log(cities);
  const Cards = hotels.map((hotel) => renderCard(hotel));

  return (
    <div className="page page--gray page--main">
      <Header />
      {/* add page__main--index-empty */}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} />
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
              <div className="cities__places-list places__list tabs__content">
                {Cards}
              </div>
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
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      previewImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Main;
