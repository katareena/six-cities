import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createAPI } from './services/api';
import { redirect } from './store/middleware/redirect';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import { reducer } from './store/reducer';
import { ActionCreator } from './store/action';
import { fetchOffersList, checkAuth } from './store/api-actions';

import { CITIES, AuthorizationStatus } from './constants/common';
import App from './components/app/app';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={CITIES}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
