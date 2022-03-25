import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { users } from './mocks/users';
import { hotels } from './mocks/hotels';
import { comments } from './mocks/comments';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'));
