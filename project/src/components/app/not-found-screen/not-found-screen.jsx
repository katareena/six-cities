import React from 'react';
// import Header from '../header/header.jsx';
import { Link } from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div className="page page--gray page--main">
      {/* <Header /> */}
      <main className="container">
        <h1>404. Page not found...</h1>
        <Link to="/">Return to the main page</Link>
      </main>
    </div>
  );
}

export default NotFoundScreen;
