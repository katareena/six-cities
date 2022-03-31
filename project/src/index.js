import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { CITIES } from './mocks/auxiliary';
import hotels from './mocks/hotels';
// import users from './mocks/users';
// import comments from './mocks/comments';

ReactDOM.render(
  <React.StrictMode>
    <App hotels={hotels} cities={CITIES}/>
  </React.StrictMode>,
  document.getElementById('root'));
