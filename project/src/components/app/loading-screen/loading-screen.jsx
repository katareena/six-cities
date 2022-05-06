import React from 'react';
import Header from './../header/header.jsx';

function LoadingScreen() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="container">
        <h1>Loading...</h1>
      </main>
    </div>
  );
}

export default LoadingScreen;
