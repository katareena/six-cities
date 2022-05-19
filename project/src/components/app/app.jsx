import React from 'react';
import { useSelector } from 'react-redux';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from './../../constants/common';
import PrivateRoute from './private-route/private-route';
import browserHistory from '../../browser-history';
import SignIn from './sign-in/sign-in';
import Main from './main/main.jsx';
import OfferPage from './offer-page/offer-page';
import Favorites from './favorites/favorites';
import NotFoundScreen from './not-found-screen/not-found-screen';
import LoadingScreen from './loading-screen/loading-screen';
import MainEmpty from './main-empty/main-empty';
import { getOffers, getIsOffersLoaded } from '../../store/data/selectors';

function renderMain(offers, isOffersLoaded) {
  if (!isOffersLoaded) {
    return <LoadingScreen />;
  }

  if (offers.length === 0) {
    return <MainEmpty />;
  }

  return <Main />;
}

function App() {
  const offers = useSelector(getOffers);
  const isOffersLoaded = useSelector(getIsOffersLoaded);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route exact path={AppRoute.LOGIN} render={() => <SignIn />} />

        <Route exact path={AppRoute.ROOT} render={() => renderMain(offers, isOffersLoaded)}/>

        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <Favorites />} />

        <Route exact path={AppRoute.OFFER} render={() => <OfferPage />} />

        <Route render={() => <NotFoundScreen />} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
