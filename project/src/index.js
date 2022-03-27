import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import hotels from './mocks/hotels';
// import users from './mocks/users';
// import comments from './mocks/comments';

ReactDOM.render(
  <React.StrictMode>
    <App hotels={hotels} />
  </React.StrictMode>,
  document.getElementById('root'));
