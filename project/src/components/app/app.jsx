import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRout } from './../../constants/common';
import SignIn from './sign-in/sign-in';
import Main from './main/main.jsx';
import Favorites from './favorites/favorites';
import NotFoundPage from './not-found/not-found';
import OfferPage from './offer-page/offer-page';
import citiesProp from '../prop-types/cities.prop';
import commentsProp from '../prop-types/comments.prop';
import offersProp from '../prop-types/offers.prop';

function App({offers, cities, comments}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRout.ROOT} exact>
          <Main offers={offers} cities={cities}/>
        </Route>

        <Route path={AppRout.LOGIN} exact>
          <SignIn />
        </Route>

        <Route path={AppRout.FAVORITES} exact>
          <Favorites offers={offers} />
        </Route>

        <Route path={AppRout.OFFER} exact>
          <OfferPage offers={offers} comments={comments}/>
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: offersProp,
  cities: citiesProp.isRequired,
  comments: commentsProp,
};

export default App;
