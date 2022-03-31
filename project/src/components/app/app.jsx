import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRout } from './../../constants/common';

import SignIn from './sign-in/sign-in';
import Main from './main/main.jsx';
import Favorites from './favorites/favorites';
import NotFoundPage from './not-found/not-found';
import Offer from './offer/offer';

function App({hotels, cities}) {
  return (
    <BrowserRouter>
      <Switch>
        {/* если в Route передавать компонент через проп, то внутрь компонента передаются служебные сво-ва: history- обертка для работы с history API, location-, match */}
        {/* <Route path='/' exact component={Main}>
          <Main hotels={hotels} />
        </Route> */}

        <Route path={AppRout.ROOT} exact>
          <Main hotels={hotels} cities={cities}/>
        </Route>

        <Route path={AppRout.LOGIN} exact>
          <SignIn />
        </Route>

        <Route path={AppRout.FAVORITES} exact>
          <Favorites />
        </Route>

        <Route path={AppRout.OFFER} exact>
          <Offer />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  hotels: PropTypes.arrayOf( //an array of certain elements, allows to refine the contents of the array
    PropTypes.shape({ //allows to describe the structure of the expected object
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

export default App;
