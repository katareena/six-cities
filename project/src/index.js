import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import { reducer } from './store/reducer';
import { createAPI } from './services/api';
import { fetchOffersList } from './store/api-actions';
import { CITIES } from './constants/common';
import App from './components/app/app';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={CITIES}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
