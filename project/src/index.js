import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import { reducer } from './store/reducer';
import App from './components/app/app';
import { CITIES } from './constants/common';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={CITIES}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
