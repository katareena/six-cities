import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from './services/api';
import { redirect } from './store/middleware/redirect';
import { Provider } from 'react-redux';
import rootReducer from './store/root-reducer';
import { requireAuthorization } from './store/action';
import { fetchOffersList, checkAuth } from './store/api-actions';
import { CITIES, AuthorizationStatus } from './constants/common';
import App from './components/app/app';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={CITIES}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
