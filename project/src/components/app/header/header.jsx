import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../../constants/common';
import { signOut, setActiveUser } from '../../../store/action';
import { getAuthorizationStatus, getAuthUser } from '../../../store/user/selectors';

function renderUserMenu(authorizationStatus, authUser, dispatch) {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to="/favorites">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={authUser.avatarUrl} alt={'User avatar'} style={{borderRadius: '50%'}}/>
            </div>
            <span className="header__user-name user__name">{authUser.email}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            to="/"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(signOut());
              dispatch(setActiveUser({
                avatarUrl: '',
                email: '',
                id: null,
                isPro: false,
                name: '',
              }));
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

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authUser = useSelector(getAuthUser);
  const dispatch = useDispatch();

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
            {renderUserMenu(authorizationStatus, authUser, dispatch)}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
