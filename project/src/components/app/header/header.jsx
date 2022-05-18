import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthorizationStatus, AppRoute } from '../../../constants/common';
import { signout, setActiveUser } from '../../../store/action';

function renderUserMenu(authorizationStatus, signoutHandler, authUser, setActiveUserHandler) {
  const mail = localStorage.getItem('email');

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to="/favorites">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{mail}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            to="/"
            onClick={(evt) => {
              evt.preventDefault();
              signoutHandler();
              setActiveUserHandler('');
              localStorage.removeItem('mail');
            }}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.LOGIN}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    );
  }
}

function Header({authorizationStatus, authUser, signoutHandler, setActiveUserHandler}) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            {renderUserMenu(authorizationStatus, signoutHandler, authUser, setActiveUserHandler)}
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authUser: PropTypes.string,
  signoutHandler: PropTypes.func,
  setActiveUserHandler: PropTypes.func,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  authUser: USER.authUser,
});

const mapDispatchToProps = (dispatch) => ({
  signoutHandler() {
    dispatch(signout());
  },

  setActiveUserHandler(userMail) {
    dispatch(setActiveUser(userMail));
  },
});

export { Header };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
