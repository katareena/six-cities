import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import cn from 'classnames';

import Header from '../header/header';

function SignIn (props) {
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="https://ru.reactjs.org">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

SignIn.propTypes = {
  // isPremium: PropTypes.bool.isRequired,
  // isFavorite: PropTypes.bool.isRequired,
  // previewImage: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // rating: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
};

export default SignIn;
