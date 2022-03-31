import React from 'react';
import Header from './../header/header.jsx';

function NotFoundPage () {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="container">
        <h1>404. Page not found...</h1>
      </main>
    </div>
  );
}

export default NotFoundPage;
