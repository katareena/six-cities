import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRout } from './../../constants/common';

import SignIn from './sign-in/sign-in';
import Main from './main/main.jsx';
import Favorites from './favorites/favorites';
import NotFoundPage from './not-found/not-found';
import Offer from './offer/offer';

import citiesProp from '../prop-types/cities.prop';
import commentsProp from '../prop-types/comments.prop';
import hotelsProp from '../prop-types/hotels.prop';

function App({hotels, cities, comments}) {
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
          <Favorites hotels={hotels} />
        </Route>

        <Route path={AppRout.OFFER} exact>
          <Offer hotels={hotels} comments={comments}/>
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  hotels: hotelsProp,
  cities: citiesProp.isRequired,
  comments: commentsProp,
};

export default App;
