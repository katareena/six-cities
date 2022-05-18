import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import citiesProp from '../prop-types/cities.prop';
import { getIsOffersLoaded } from '../../store/data/selectors';

function App({cities, isOffersLoaded}) {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <Route exact path={AppRoute.ROOT} render={(p) => (
          !isOffersLoaded ? <LoadingScreen /> : <Main {...p} cities={cities}/>
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

App.propTypes = {
  cities: citiesProp.isRequired,
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isOffersLoaded: getIsOffersLoaded(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
