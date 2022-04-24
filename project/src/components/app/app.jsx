import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from './../../constants/common';
import LoadingScreen from './loading-screen/loading-screen';
import SignIn from './sign-in/sign-in';
import Main from './main/main.jsx';
import Favorites from './favorites/favorites';
import NotFoundPage from './not-found/not-found';
import OfferPage from './offer-page/offer-page';
import citiesProp from '../prop-types/cities.prop';

function App({cities, isOffersLoaded}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact render={(p) => (
          !isOffersLoaded ? <LoadingScreen /> : <Main {...p} cities={cities}/>
        )}
        />

        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>

        <Route path={AppRoute.FAVORITES} exact>
          <Favorites />
        </Route>

        <Route path={AppRoute.OFFER} exact>
          <OfferPage />
        </Route>

        <Route>
          <NotFoundPage />
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
  isOffersLoaded: state.isOffersLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
