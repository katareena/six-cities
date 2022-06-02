import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './../../constants/common';
import PrivateRoute from './private-route/private-route';
import AuthPage from './auth-page/auth-page';
import MainPage from './main-page/main-page';
import OfferPage from './offer-page/offer-page';
import FavoritesPage from './favorites-page/favorites-page';
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

  return <MainPage />;
}

function App() {
  const offers = useSelector(getOffers);
  const isOffersLoaded = useSelector(getIsOffersLoaded);

  return (
    <Switch>

      <Route exact path={AppRoute.LOGIN}>
        <PrivateRoute exact path={AppRoute.LOGIN}
          allowedStatus={AuthorizationStatus.NO_AUTH}
          redirect={AppRoute.ROOT}
          render={() => <AuthPage/>}
        />
      </Route>

      <PrivateRoute exact path={AppRoute.FAVORITES}
        allowedStatus={AuthorizationStatus.AUTH}
        redirect={AppRoute.LOGIN}
        render={() => <FavoritesPage/>}
      />

      <Route exact path={AppRoute.ROOT} render={() => renderMain(offers, isOffersLoaded)}/>

      <Route exact path={AppRoute.OFFER} render={() => <OfferPage />} />

      <Route render={() => <NotFoundScreen />} />

    </Switch>
  );
}

export default App;
