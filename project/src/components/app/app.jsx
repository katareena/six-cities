import React from 'react';
import { useSelector } from 'react-redux';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from './../../constants/common';
import PrivateRoute from './private-route/private-route';
import browserHistory from '../../browser-history';
import LoadingScreen from './loading-screen/loading-screen';
import SignIn from './sign-in/sign-in';
import Main from './main/main.jsx';
import Favorites from './favorites/favorites';
import NotFoundScreen from './not-found-screen/not-found-screen';
import OfferPage from './offer-page/offer-page';
import { getIsOffersLoaded } from '../../store/data/selectors';

function App() {
  const isOffersLoaded = useSelector(getIsOffersLoaded);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <Route exact path={AppRoute.ROOT} render={(p) => (
          !isOffersLoaded ? <LoadingScreen /> : <Main {...p} />
        )}
        />

        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites />}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.OFFER}>
          <OfferPage />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
