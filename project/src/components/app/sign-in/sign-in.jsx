import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../../store/action';
import { login } from '../../../store/api-actions';
import Header from '../header/header';

function SignIn ({onSubmit, setActiveUser}) {
  const mailRef = useRef();
  const passwordRef = useRef();

  const handelSubmit = () => {
    const userData = {
      login: mailRef.current.value,
      password: passwordRef.current.value,
    };

    onSubmit(userData);
    setActiveUser(userData.login);
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={(evt) => {
                evt.preventDefault();
                handelSubmit();
              }}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={mailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
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
  onSubmit: PropTypes.func.isRequired,
  setActiveUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  setActiveUser(userMail) {
    dispatch(ActionCreator.setActiveUser(userMail));
    localStorage.setItem('email', userMail);
  },
});

export { SignIn };
export default connect(null, mapDispatchToProps)(SignIn);
